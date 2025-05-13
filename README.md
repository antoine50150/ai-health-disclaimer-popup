# ai-health-disclaimer-popup

Reusable disclaimer popup components for AI health demo apps. Displayed on first visit (or every 24h), warning users that results are educational only and not medical advice. Includes Vue and React implementations.

---

## 📄 DisclaimerPopup Integration Guide

### 🧠 Purpose:
Display a "Disclaimer" popup the first time a user opens the app (or after 24h), with a checkbox and a "I Understand" button. It's used for informational warnings on AI/health-related apps.

---

## 📁 1. Popup Component (React or Vue)

### ✅ React — DisclaimerPopup.tsx

```tsx
import React, { useState } from 'react';
import './DisclaimerPopup.css';

const DisclaimerPopup = ({ onAccept }: { onAccept: () => void }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2 className="popup-title">
          Welcome to <span className="highlight">[PROJECT NAME]</span>
        </h2>
        <p className="popup-text">
          This demo uses AI to simulate or display health-related data.
        </p>
        <p className="popup-text">
          <span className="highlight">Disclaimer:</span> This is for informational and educational purposes only.
        </p>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="consent"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor="consent">I have read and understood the above</label>
        </div>
        <button
          disabled={!checked}
          className="confirm-button"
          onClick={onAccept}
        >
          I Understand
        </button>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
```

---

### 🎨 CSS — DisclaimerPopup.css

```css
.popup-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.popup-container {
  background: white;
  padding: 30px 40px;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  font-family: sans-serif;
}

.popup-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background-color: transparent;
}

.popup-text {
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #333;
  line-height: 1.4;
}

.highlight {
  color: #d32f2f;
  font-weight: bold;
}

.checkbox-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 20px auto 10px;
  flex-wrap: wrap;
}

.checkbox-container input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #d32f2f;
  cursor: pointer;
}

.checkbox-container label {
  font-size: 0.95rem;
  line-height: 1.3;
  cursor: pointer;
  color: #111;
}

.confirm-button {
  margin-top: 10px;
  padding: 10px 24px;
  background-color: #d32f2f;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 0.95rem;
  cursor: pointer;
}

.confirm-button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}
```

---

## 🔁 2. Integration by Project Type

### ✅ React (TSX / JSX)

**▶️ Target files:**  
`Home.tsx`, `Home.jsx`, or `Index.jsx`

**Add imports:**
```tsx
import DisclaimerPopup from '../components/DisclaimerPopup';
import { useState, useEffect } from 'react';
```

**Inside your component:**
```tsx
const [showPopup, setShowPopup] = useState(false);

useEffect(() => {
  const accepted = localStorage.getItem('disclaimerAcceptedAt');
  const now = Date.now();
  if (!accepted || now - parseInt(accepted, 10) > 86400000) {
    setShowPopup(true);
  }
}, []);

const handleAccept = () => {
  localStorage.setItem('disclaimerAcceptedAt', Date.now().toString());
  setShowPopup(false);
};
```

**In your return block:**
```tsx
<>
  {showPopup && <DisclaimerPopup onAccept={handleAccept} />}
  {/* Main page content here */}
</>
```

---

### ✅ Vue 3 (in App.vue)

**In `<template>`:**
```vue
<DisclaimerPopup v-if="showDisclaimer" @accepted="acceptDisclaimer" />
```

**In `<script>`:**
```ts
import DisclaimerPopup from './components/DisclaimerPopup.vue';

export default {
  components: { DisclaimerPopup },
  data() {
    return {
      showDisclaimer: false
    };
  },
  mounted() {
    const last = localStorage.getItem('disclaimerAcceptedAt');
    const now = Date.now();
    if (!last || now - parseInt(last, 10) > 86400000) {
      this.showDisclaimer = true;
    }
  },
  methods: {
    acceptDisclaimer() {
      localStorage.setItem('disclaimerAcceptedAt', Date.now().toString());
      this.showDisclaimer = false;
    }
  }
}
```

---

## ✅ Project-by-Project Summary

| Project Name         | Main File to Edit      | DisclaimerPopup Added in | Confirmed Working |
|----------------------|------------------------|---------------------------|--------------------|
| AI WhatIf            | index.html (raw JS)    | Inline HTML/CSS popup     | ✅                 |
| Bogalusa             | App.vue                | `<DisclaimerPopup />`     | ✅                 |
| CardioCNN            | HomeView.vue           | `<DisclaimerPopup />`     | ✅                 |
| CardioVascularView   | App.js                 | `<DisclaimerPopup />`     | ✅                 |
| EchoExplorer         | HomePage.js            | `<DisclaimerPopup />`     | ✅                 |
| HealthMap            | Home.tsx               | `<DisclaimerPopup />`     | ✅                 |
| HeartClusters        | App.vue                | Included manually          | ✅                 |
| LifeSaver            | Home.jsx               | `<DisclaimerPopup />`     | ✅                 |
| PollutionMap         | Home.tsx               | `<DisclaimerPopup />`     | ✅                 |

---

## 📄 License

This project is licensed under the **GPL-3.0 License** – see the LICENSE file for details.
