# 🏔️ Jharkhand Tourism - Smart Travel Planner

> A comprehensive web application for planning personalized Jharkhand travel itineraries with eco-friendly transport recommendations and carbon footprint tracking.

**Version:** 1.0.0 | **Last Updated:** November 15, 2025 | **Status:** ✅ Active

---

## 📚 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How It Works](#how-it-works)
- [API Documentation](#api-documentation)
- [Detailed Features](#detailed-features)
- [Carbon Footprint System](#carbon-footprint-system)
- [Transport Recommendation Engine](#transport-recommendation-engine)
- [Activity Database](#activity-database)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Future Roadmap](#future-roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 Overview

### Mission
The Jharkhand Tourism website is a modern, eco-conscious travel planning platform designed to:
- 🗺️ Create personalized itineraries based on user preferences
- 🌍 Recommend sustainable transport options
- 🌱 Track and minimize carbon emissions
- 📍 Provide interactive journey visualization
- 💡 Enable informed, sustainable tourism decisions

### Why This Project?
Jharkhand is a tourism-rich state with 8+ major destinations offering diverse experiences. This platform promotes **sustainable tourism** by:
- Educating travelers about carbon footprint
- Recommending eco-friendly transport
- Helping plan budget-conscious, eco-friendly trips
- Supporting local economies through tailored recommendations

### Development Context
Developed for **Smart India Hackathon (SIH) 2025** with focus on sustainable development goals.

---

## ✨ Key Features

### 1️⃣ Intelligent Trip Planning
```
✓ Multi-destination support (8 destinations)
✓ Flexible duration (1-30 days)
✓ Group size configuration (1-50 people)
✓ 4 budget tiers with specific recommendations
✓ 6 interest categories for activity matching
✓ Special requirements handling
```

**Supported Destinations:**
- Ranchi
- Deoghar
- Hazaribagh
- Jamshedpur
- Dhanbad
- Betla National Park
- Netarhat
- Parasnath

**Budget Categories:**
| Category | Daily Budget | Transport Focus |
|----------|--------------|-----------------|
| Budget | ₹500-1500 | Bus, Train, Bicycle |
| Moderate | ₹1500-3000 | Train, Bus, Car |
| Comfort | ₹3000-5000 | Train, Car, Flight |
| Luxury | ₹5000+ | Car, Flight, Train |

**Interest Categories:**
- 🌿 Nature & Wildlife
- ⛰️ Adventure
- 🏛️ Culture & Heritage
- 🙏 Spiritual
- 📸 Photography
- 🍜 Local Cuisine

### 2️⃣ Smart Transport Recommendations
Real-time suggestions based on budget selection with:
- CO₂ emission data
- Cost estimations
- Environmental impact
- Budget compatibility

**6 Transport Options:**
```
✈️  Flight        | 255 g CO₂/km | Cost: High     | Speed: Fastest
🚗 Car          | 192 g CO₂/km | Cost: Moderate | Flexibility: High
🚌 Bus          |  89 g CO₂/km | Cost: Low      | Eco-Score: Good
🚂 Train        |  41 g CO₂/km | Cost: Low      | Eco-Score: Excellent
🚴 Bicycle      |   0 g CO₂/km | Cost: Free     | Eco-Score: Perfect
🚶 Walking      |   0 g CO₂/km | Cost: Free     | Eco-Score: Perfect
```

### 3️⃣ Carbon Footprint Calculator
Comprehensive environmental tracking:
```
✓ Per-person CO₂ calculation
✓ Transport-wise emissions breakdown
✓ Comparison with baseline (Flight)
✓ Savings percentage display
✓ Tree planting equivalents
✓ Visual impact indicators
```

**Example Output:**
```
Trip Details:
- Destination: Ranchi
- Distance: 240 km (round trip)
- Travelers: 2 people
- Duration: 3 days

Emissions:
- Recommended (Train): 9.84 kg CO₂ per person
- Flight alternative: 61.2 kg CO₂ per person
- Savings: 51.36 kg CO₂ (83.9% reduction)
- Tree Equivalent: 2.4 trees worth of CO₂ offset
```

### 4️⃣ Interactive Google Maps
Real-time visualization with:
```
✓ Destination-centered mapping
✓ Multi-colored markers (Start, Attractions, End)
✓ Journey route visualization
✓ Clickable info windows
✓ Responsive sizing
✓ Print-friendly layout
```

**Map Features:**
- 🔴 Red Marker: Starting Point
- 🔵 Blue Markers: Attractions (2-3 per destination)
- 🟣 Purple Marker: End Point
- 📍 Purple Polyline: Journey route
- 🗺️ Map Controls: Zoom, Pan, Type selection

### 5️⃣ Day-by-Day Itinerary
Personalized activity scheduling:
```
✓ Activities distributed across days
✓ Interest-based selection
✓ Rest/travel time included
✓ Realistic pacing
✓ Emoji indicators for clarity
✓ Hover effects for interactivity
```

**Activity Distribution:**
- Activities per day = Total Activities ÷ Trip Duration
- Each destination: 20+ activities across 6 interests
- Intelligent fallback for mismatched interests

### 6️⃣ Weather Information
Real-time weather page with:
```
✓ Destination-specific forecasts
✓ Current conditions
✓ Temperature ranges
✓ Seasonal recommendations
✓ Packing suggestions
```

### 7️⃣ Smart Travel Tips
Budget and sustainability-aware guidance:
```
✓ Budget-specific accommodation advice
✓ Transportation recommendations
✓ Seasonal best-time information
✓ Packing checklists
✓ Sustainability tips
✓ Local cuisine recommendations
✓ Photography hotspots
```

### 8️⃣ Responsive Design
```
✓ Mobile-first approach
✓ Desktop optimization
✓ Tablet adaptation
✓ Print-friendly layout
✓ Touch-friendly interface
✓ Accessibility features
```

**Browser Support:**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari 14+
- ✅ Chrome Mobile

---

## 🛠️ Tech Stack

### Backend Technologies
```
Node.js          - JavaScript runtime environment
Express.js       - Web application framework
Express EJS      - Template engine middleware
EJS 3.1.10       - Embedded JavaScript templates
```

### Frontend Technologies
```
HTML5            - Structure & semantics
CSS3             - Styling with advanced features:
                   * Flexbox layouts
                   * CSS Grid
                   * Gradients
                   * Animations
                   * Media queries
JavaScript (ES6) - Interactivity:
                   * Event handlers
                   * DOM manipulation
                   * LocalStorage API
                   * Async operations
```

### External APIs & Services
```
Google Maps API  - Interactive mapping
                   * 8+ destinations
                   * Marker clustering
                   * Route visualization
```

### Data Storage
```
LocalStorage     - Client-side persistence
                   * Form data
                   * Trip preferences
                   * User selections
```

### Development Tools
```
npm              - Package management
Git              - Version control
```

---

## 📁 Project Structure

```
jharkhand_site/
│
├── 📄 README.md                          # Project documentation
├── 📄 package.json                       # Dependencies & scripts
├── 📄 index.js                           # Express server entry point
│
├── 📁 views/                             # EJS Templates
│   ├── 📄 template.ejs                   # Main layout wrapper
│   ├── 📁 homepage/
│   │   └── 📄 home.ejs                   # Home page content
│   │
│   ├── 📁 destinations/
│   │   ├── 📄 mountains.ejs              # Hill stations page
│   │   ├── 📄 popular.ejs                # Popular destinations
│   │   └── 📄 wildlife.ejs               # Wildlife & parks
│   │
│   ├── 📁 aboutTourism/
│   │   └── 📄 testimonial.ejs            # User testimonials
│   │
│   ├── 📁 inspirations/                  # Inspiration gallery
│   │
│   └── 📁 planTrip/                      # Trip planning section
│       ├── 📄 tripPlanner.ejs            # Main form page
│       ├── 📄 itinerary.ejs              # Results & itinerary
│       └── 📄 weather.ejs                # Weather info page
│
├── 📁 public/                            # Static assets
│   ├── 📁 assets/                        # Images, icons, media
│   │
│   ├── 📁 css/                           # Stylesheets
│   │   ├── 📄 template.css               # Global styles (800 lines)
│   │   ├── 📄 home.css                   # Home page styling
│   │   ├── 📄 mountains.css              # Mountains destination
│   │   ├── 📄 popular.css                # Popular places
│   │   ├── 📄 wildlife.css               # Wildlife section
│   │   ├── 📄 weather.css                # Weather page (300 lines)
│   │   ├── 📄 chatbot.css                # Chat interface
│   │   └── 📄 tripplanner.css            # Trip planner (400 lines)
│   │
│   └── 📁 js/                            # Client-side scripts
│       ├── 📄 script.js                  # Global functionality
│       └── 📄 (other JS files)
│
└── 📁 node_modules/                      # Dependencies (auto-generated)
```

**Line Count Summary:**
- HTML/EJS: 1000+ lines (templates)
- CSS: 2000+ lines (5 main files)
- JavaScript: 1500+ lines (logic & interactivity)
- Configuration: 50+ lines

---

## 🚀 Getting Started

### Prerequisites

**System Requirements:**
```
Node.js          ≥ 14.0.0
npm              ≥ 6.0.0
Modern Browser   Chrome 90+, Firefox 88+, Safari 14+
```

**Optional:**
```
Google Maps API  For interactive mapping
Git              For version control
```

### Installation Steps

#### Step 1: Clone Repository
```bash
# Clone the project
git clone https://github.com/harcastic/jharkhand_site.git

# Navigate to project
cd jharkhand_site
```

#### Step 2: Install Dependencies
```bash
# Install all required packages
npm install

# Verify installation
npm list --depth=0
```

**Dependencies installed:**
```json
{
  "express": "^5.1.0",
  "ejs": "^3.1.10",
  "express-ejs-layouts": "^2.5.1",
  "dirname": "^0.1.0"
}
```

#### Step 3: Configure Google Maps API

Create/update the Google Maps script tag in `views/planTrip/itinerary.ejs`:

```html
<!-- Replace YOUR_API_KEY with actual key -->
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY">
</script>
```

**Get API Key:**
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project
3. Enable Maps JavaScript API
4. Create API key
5. Add to the script tag above

#### Step 4: Start Development Server
```bash
# Start the server
node index.js

# Expected output:
# Server is listening on port 8080
```

#### Step 5: Access Application
```
Open browser → http://localhost:8080
```

## 📄 License

This project is licensed under the **ISC License**.

```
Copyright (c) 2025 Jharkhand Tourism

Permission to use, copy, modify, and distribute this software
for any purpose with or without fee is hereby granted,
provided that the above copyright notice and this permission
notice appear in all copies.
```

---

## 🙏 Acknowledgments

### Credits
- **Smart India Hackathon (SIH) 2025** - Platform & inspiration
- **Jharkhand Tourism Board** - Content & data
- **Google Maps** - Mapping services
- **Open Source Community** - Libraries & tools

### Team
- **Developers:** Harsh Raj, Aditya Kumar Anupam, Aashish Bashkar, Prince Kumar, Ankita Prabhakar 
- **Designers:** Harsh Raj, Ankita Prabhakar, Aashish Bashkar 
- **Mentors:** None

---

## 📊 Project Metrics

### Code Statistics
```
Total Lines of Code:     4500+
HTML/EJS Templates:      1000+ lines
CSS Styling:             2000+ lines
JavaScript Logic:        1500+ lines

Components:
├─ Pages: 10+
├─ Reusable Sections: 15+
├─ CSS Classes: 100+
└─ JavaScript Functions: 50+
```

### Performance Metrics
```
Home Page Load:          < 1 second
Form Validation:         Instant (< 100ms)
Itinerary Generation:    < 500ms
Map Rendering:           < 1 second
Total Page Load:         < 2 seconds
```

### Coverage
```
Destinations:            8
Activities:              150+
Interest Categories:     6
Transport Options:       6
Budget Tiers:            4
Languages (planned):     1 (English)
```

---

## 🚀 Quick Links

- 📖 [Documentation](./README.md)
- 🏠 [Home Page](http://localhost:8080)
- 📋 [Trip Planner](http://localhost:8080/plantrip/trip-Planner)
- 🌍 [Google Maps API](https://developers.google.com/maps)
- 📚 [Express.js Docs](https://expressjs.com/)

---

**Made with ❤️ for Sustainable Tourism in Jharkhand**

**Version:** 1.0.0 | **Last Updated:** November 15, 2025 | **Status:** ✅ Active

---
