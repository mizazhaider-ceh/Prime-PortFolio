# Images Folder

This folder contains all images and media for your portfolio website.

## Required Files

### robot.mp4
- **Location:** `public/images/robot.mp4`
- **Used in:** Hero section
- **Recommended size:** 1080x1080px (square) or similar
- **Format:** MP4 video
- **Description:** Animated robot video for Hero section
- **Notes:** Keep file size under 5MB for fast loading

### profile.png
- **Location:** `public/images/profile.png`
- **Used in:** About section
- **Recommended size:** 800x1000px (portrait orientation - 4:5 ratio)
- **Format:** PNG or JPG
- **Description:** Your professional profile photo
- **Notes:** High quality image recommended

## Usage

1. Add `robot.mp4` to this folder - it will autoplay in the Hero section
2. Add `profile.png` to this folder - it will display in the About section

## Adding More Images

You can add more images to this folder and reference them in your components using:

```tsx
<img src="/images/your-image-name.jpg" alt="Description" />
```

## Tips

- Use high-quality images (at least 800px wide)
- PNG format is recommended for portraits with transparency support
- Optimize images for web (use tools like TinyPNG to compress)
- Keep file sizes under 500KB for better performance
