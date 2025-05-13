# ai-health-disclaimer-popup

Reusable disclaimer popup components for AI health demo apps. Displayed on first visit (or every 24h), warning users that results are educational only and not medical advice. Includes Vue and React implementations.

---

## 📄 Purpose

This repository provides standardized popup components to display a **disclaimer** at the first page visit (or once every 24 hours). These popups are essential for AI demos, especially in the medical and health domain, to clarify that the tool is for **informational use only**.

---

## 🧩 Included Implementations

- ✅ React (JSX and TSX)
- ✅ Vue 3 (Composition API & Options API)

Each popup:
- Displays a message with a checkbox and "I Understand" button
- Uses `localStorage` to persist consent for 24h
- Can be styled independently or with provided CSS

---

## 🚀 Quick Integration

### React (JSX / TSX)

1. **Import the component:**
```tsx
import DisclaimerPopup from '../components/DisclaimerPopup';
```

2. **State management:**
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

3. **JSX usage:**
```tsx
{showPopup && <DisclaimerPopup onAccept={handleAccept} />}
```

---

### Vue 3

1. **Import and register component in `App.vue`:**
```vue
<DisclaimerPopup v-if="showDisclaimer" @accepted="acceptDisclaimer" />
```

2. **Logic:**
```js
import DisclaimerPopup from './components/DisclaimerPopup.vue';

export default {
  components: { DisclaimerPopup },
  data() {
    return { showDisclaimer: false };
  },
  mounted() {
    const last = localStorage.getItem('disclaimerAcceptedAt');
    const now = Date.now();
    if (!last || now - parseInt(last) > 86400000) {
      this.showDisclaimer = true;
    }
  },
  methods: {
    acceptDisclaimer() {
      localStorage.setItem('disclaimerAcceptedAt', Date.now().toString());
      this.showDisclaimer = false;
    }
  }
};
```

---

## 🗂️ Projects using this

| Project                | Entry Point         | Status |
|------------------------|---------------------|--------|
| AI WhatIf              | `index.html`        | ✅     |
| Bogalusa               | `App.vue`           | ✅     |
| CardioCNN              | `HomeView.vue`      | ✅     |
| CardioVascularView     | `App.js`            | ✅     |
| EchoExplorer           | `HomePage.js`       | ✅     |
| HealthMap              | `Home.tsx`          | ✅     |
| HeartClusters          | `App.vue`           | ✅     |
| LifeSaver              | `Home.jsx`          | ✅     |
| PollutionMap           | `Home.tsx`          | ✅     |

---

## 📄 License

This project is licensed under the **GPL-3.0 License** – see the LICENSE file for details.
