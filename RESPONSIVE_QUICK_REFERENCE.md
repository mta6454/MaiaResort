# Mobile Responsive - Quick Reference Guide

## 📱 Breakpoints

```css
/* Tablet and below */
@media (max-width: 768px) { ... }

/* Mobile and below */
@media (max-width: 480px) { ... }

/* Desktop only */
@media (min-width: 769px) { ... }
```

## 🎨 Common Responsive Patterns Used

### 1. **Stacking Layout**
```css
/* Desktop: Side by side */
.container {
  display: flex;
  flex-direction: row;
}

/* Mobile: Stacked */
@media (max-width: 768px) {
  .container {
    flex-direction: column !important;
  }
}
```

### 2. **Text Scaling**
```css
/* Desktop */
.heading {
  font-size: 3rem;
}

/* Tablet */
@media (max-width: 768px) {
  .heading {
    font-size: 2rem;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .heading {
    font-size: 1.5rem;
  }
}
```

### 3. **Width Adjustments**
```css
/* Desktop */
.element {
  width: 40%;
}

/* Tablet */
@media (max-width: 768px) {
  .element {
    width: 90%;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .element {
    width: 95%;
  }
}
```

### 4. **Spacing Reduction**
```css
/* Desktop */
.section {
  padding: 4rem;
  margin: 4rem;
}

/* Tablet */
@media (max-width: 768px) {
  .section {
    padding: 2rem;
    margin: 2rem;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .section {
    padding: 1rem;
    margin: 1rem;
  }
}
```

## 📐 Bootstrap Grid Classes Used

### Responsive Columns
```html
<!-- Full width on mobile, half on tablet, quarter on desktop -->
<div class="col-12 col-md-6 col-lg-3">...</div>

<!-- Common patterns in the project -->
<div class="col-12 mb-3 mb-md-0">        <!-- Mobile: full width with margin -->
<div class="col-6 col-md-2">             <!-- Mobile: half, Tablet: 2/12 -->
<div class="col-md-4">                    <!-- Mobile: full, Desktop: 1/3 -->
```

### Spacing Utilities
```html
<div class="mb-3 mb-md-0">   <!-- Margin bottom on mobile only -->
<div class="p-4 p-md-6">     <!-- Responsive padding -->
```

## 🎯 Component-Specific Breakpoints

### Header
- **768px**: Reduce logo and icons to 1.75rem
- **480px**: Further reduce to 1.5rem

### Footer
- **768px**: 2-column layout, smaller text
- Uses: `col-12 col-6 col-md-*` pattern

### Bottom Menu
- **992px**: Width 60%
- **768px**: Width 90%, font-size 0.75rem
- **480px**: Width 95%, font-size 0.65rem

### Carousels
- **768px**: Full-width panels, 2.5rem controls
- **480px**: 2rem controls

### Forms
- **768px**: Reduced padding, adjusted text
- **480px**: Full-width buttons, compact layout

## 🔧 Common Mobile Fixes Applied

### 1. **Remove Hardcoded Margins**
```css
/* ❌ Before */
.element {
  margin-left: 30px;
}

/* ✅ After */
@media (min-width: 768px) {
  .element {
    margin-left: 30px;
  }
}
```

### 2. **Full Width on Mobile**
```css
/* ❌ Before */
.sidebar {
  width: 20%;
}

/* ✅ After */
.sidebar {
  width: 20%;
}

@media (max-width: 768px) {
  .sidebar {
    width: 100% !important;
  }
}
```

### 3. **Responsive Images**
```css
.image-container img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

@media (max-width: 768px) {
  .image-container {
    width: 100% !important;
  }
}
```

## 📊 Testing Checklist

### Viewport Sizes to Test
- [ ] 320px (iPhone SE)
- [ ] 375px (iPhone 12/13)
- [ ] 414px (iPhone 12 Pro Max)
- [ ] 768px (iPad Portrait)
- [ ] 1024px (iPad Landscape)
- [ ] 1280px (Small Desktop)
- [ ] 1920px (Full HD Desktop)

### Elements to Verify
- [ ] Text readability (minimum 12px)
- [ ] Touch targets (minimum 44px)
- [ ] No horizontal scroll
- [ ] Images scale properly
- [ ] Forms are usable
- [ ] Navigation is accessible
- [ ] Spacing is appropriate
- [ ] Content hierarchy maintained

## 🚀 Quick Commands

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Check for Linting Errors
```bash
npm run lint
```

## 📱 Mobile-First Best Practices

1. **Start with mobile styles, enhance for desktop**
   ```css
   /* Base (mobile) */
   .element { font-size: 1rem; }
   
   /* Desktop enhancement */
   @media (min-width: 768px) {
     .element { font-size: 1.5rem; }
   }
   ```

2. **Use relative units**
   - `rem` for font sizes
   - `%` or `vw/vh` for widths/heights
   - `em` for component-relative spacing

3. **Optimize touch targets**
   - Minimum 44px × 44px for buttons
   - Add padding around clickable elements
   - Increase spacing between interactive elements

4. **Simplify layouts**
   - Single column on mobile
   - Reduce visual complexity
   - Prioritize content over decoration

## 🔍 Debug Tips

### View Responsive Layout
1. Open Chrome DevTools (F12)
2. Click device toolbar (Ctrl+Shift+M)
3. Select device or set custom dimensions
4. Test different orientations

### Common Issues & Solutions

**Issue**: Text too small on mobile
```css
/* Solution: Add responsive font size */
@media (max-width: 768px) {
  .text { font-size: 14px !important; }
}
```

**Issue**: Horizontal scroll on mobile
```css
/* Solution: Check for fixed widths and overflow */
body {
  overflow-x: hidden;
}
.container {
  max-width: 100%;
}
```

**Issue**: Images breaking layout
```css
/* Solution: Constrain image width */
img {
  max-width: 100%;
  height: auto;
}
```

## 📚 Resources

- [MDN: Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Bootstrap Grid](https://getbootstrap.com/docs/5.0/layout/grid/)
- [CSS Tricks: Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)

---

**Pro Tip**: Always test on real devices when possible. Emulators are helpful, but nothing beats actual mobile testing!

