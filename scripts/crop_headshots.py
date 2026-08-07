"""
Auto-crop board headshots to center on the detected face.
Outputs square images into public/Board Headshots/cropped/
"""

import os
import sys
import cv2
import numpy as np
from PIL import Image, ImageOps

INPUT_DIR = os.path.join(os.path.dirname(__file__), "../public/Board Headshots")
OUTPUT_DIR = os.path.join(INPUT_DIR, "cropped")
OUTPUT_SIZE = 400  # final square px

# Haar cascade bundled with OpenCV
CASCADE_PATH = cv2.data.haarcascades + "haarcascade_frontalface_default.xml"

def detect_face(img_bgr):
    """Return (x, y, w, h) of the largest face, or None."""
    face_cascade = cv2.CascadeClassifier(CASCADE_PATH)
    gray = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2GRAY)

    # Try progressively more lenient settings
    for scale, neighbors in [(1.05, 5), (1.1, 3), (1.15, 2), (1.2, 1)]:
        faces = face_cascade.detectMultiScale(gray, scaleFactor=scale, minNeighbors=neighbors, minSize=(30, 30))
        if len(faces) > 0:
            # Pick the largest face
            return max(faces, key=lambda f: f[2] * f[3])
    return None


def smart_crop(pil_img, face_rect, padding_factor=2.6):
    """
    Crop a square region around the face with generous padding so the
    full head (including hair) is visible.
    """
    img_w, img_h = pil_img.size
    fx, fy, fw, fh = face_rect

    # Center of face
    cx = fx + fw // 2
    cy = fy + fh // 2

    # Square side: face width * padding_factor
    half = int(fw * padding_factor / 2)

    # Shift crop slightly upward so hair is included, but keep shoulders visible
    cy_adjusted = cy - int(fh * 0.05)

    left   = max(0, cx - half)
    right  = min(img_w, cx + half)
    top    = max(0, cy_adjusted - half)
    bottom = min(img_h, cy_adjusted + half)

    # If the crop box hit an edge, extend the other side
    if left == 0:
        right = min(img_w, right + (half - cx))
    if right == img_w:
        left = max(0, left - (half - (img_w - cx)))
    if top == 0:
        bottom = min(img_h, bottom + (half - cy_adjusted))
    if bottom == img_h:
        top = max(0, top - (half - (img_h - cy_adjusted)))

    cropped = pil_img.crop((left, top, right, bottom))
    return cropped.resize((OUTPUT_SIZE, OUTPUT_SIZE), Image.LANCZOS)


def fallback_crop(pil_img):
    """No face detected – use top-center crop (faces are usually there)."""
    img_w, img_h = pil_img.size
    side = min(img_w, img_h)
    left = (img_w - side) // 2
    # Bias toward top 40 % of the image
    top = int(img_h * 0.05)
    top = min(top, img_h - side)
    cropped = pil_img.crop((left, top, left + side, top + side))
    return cropped.resize((OUTPUT_SIZE, OUTPUT_SIZE), Image.LANCZOS)


def process(filename):
    src = os.path.join(INPUT_DIR, filename)
    dst = os.path.join(OUTPUT_DIR, filename)

    pil_img = Image.open(src).convert("RGB")
    # Respect EXIF orientation
    pil_img = ImageOps.exif_transpose(pil_img)

    # OpenCV needs BGR numpy array for detection
    img_bgr = cv2.cvtColor(np.array(pil_img), cv2.COLOR_RGB2BGR)

    face = detect_face(img_bgr)
    if face is not None:
        result = smart_crop(pil_img, face)
        print(f"  [face found]   {filename}")
    else:
        result = fallback_crop(pil_img)
        print(f"  [no face/fallback] {filename}")

    # Preserve original extension but save as JPEG for uniformity
    base, _ = os.path.splitext(filename)
    out_path = os.path.join(OUTPUT_DIR, base + ".jpg")
    result.save(out_path, "JPEG", quality=92)
    return base + ".jpg"


if __name__ == "__main__":
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    extensions = {".jpg", ".jpeg", ".png", ".webp"}
    files = [
        f for f in os.listdir(INPUT_DIR)
        if os.path.isfile(os.path.join(INPUT_DIR, f))
        and os.path.splitext(f)[1].lower() in extensions
    ]

    if not files:
        print("No images found in", INPUT_DIR)
        sys.exit(1)

    print(f"Processing {len(files)} images → {OUTPUT_DIR}\n")
    for f in sorted(files):
        process(f)

    print("\nDone.")
