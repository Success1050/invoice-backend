# InvoiceFlow – Full Stack Ecosystem

## Overview

**InvoiceFlow** is a comprehensive full-stack invoice and customer management ecosystem designed for modern businesses. It provides a seamless, high-performance experience across multiple platforms, allowing users to efficiently track revenue, manage clients, and maintain professional financial records.

The ecosystem is built with a focus on **modular architecture**, **real-time data synchronization**, and **premium UX/UI aesthetics**.

---

## Project Architecture

The system is composed of three independent, specialized components that work together via a centralized RESTful API.

### 1. Backend API (NestJS)
The "Brain" of the ecosystem, providing robust data management and business logic.
- **Repository**: [invoice-backend](https://github.com/Success1050/invoice-backend)
- **Tech Stack**: NestJS (Node.js), TypeScript, NPM.
- **Key Features**: 
  - Full CRUD operations for `/customers` and `/invoices`.
  - Advanced cascading deletes to maintain data integrity.
  - In-memory optimized storage for rapid performance.
  - Global validation pipes and unified error management.

### 2. Web Application (Next.js)
A desktop-first, performance-oriented dashboard for administrative and heavy-duty management.
- **Repository**: [invoice-frontend](https://github.com/Success1050/invoice-frontend)
- **Tech Stack**: Next.js (App Router), TypeScript, Tailwind CSS v4, Fetch API.
- **Key Features**:
  - **Dynamic Dashboard**: Real-time revenue statistics and collection metrics.
  - **Advanced Filtering**: Multi-point filtering by customer and sorting by "Latest Addition."
  - **Premium Detail Views**: Glassmorphism aesthetic and interactive transactional history.
  - **Responsive Design**: Optimized layouts for mobile, tablet, and desktop screens.

### 3. Mobile Application (Flutter)
A cross-platform mobile suite built for professional tools on the go.
- **Repository**: [invoice-mobile](https://github.com/Success1050/invoice-mobile)
- **Tech Stack**: Flutter, Dart, Provider (State Management), Http, Google Fonts.
- **Key Features**:
  - **Modern Premium UI/UX**: Dark mode theme with smooth animations and overflow-resilience.
  - **Smart CRM**: Centralized customer profiles with one-tap shortcuts to related invoices.
  - **Reliable Networking**: Built-in retry mechanisms and user-friendly SnackBar messaging for API errors.
  - **Localization**: Native date and currency (Intl) formatting.

---

## APK Download

You can experience the mobile application directly on Android:

 **[Download Android APK](https://drive.google.com/file/d/1pWw-zWHbV7Jj1VdumAzVvXtD4s_8NGzZ/view?usp=sharing)**

> *Note: Ensure "Install from unknown sources" is enabled in your device settings.*

---

## Quick Start Guide

### 1. Unified Setup
To get the entire ecosystem running locally:
```bash
# Clone the Core Backend
git clone https://github.com/Success1050/invoice-backend.git
cd invoice-app-backend && npm install

# Clone the Web Frontend
git clone https://github.com/Success1050/invoice-frontend.git
cd invoice-app-web && npm install

# Clone the Mobile App
git clone https://github.com/Success1050/invoice-mobile.git
cd invoice_app && flutter pub get
```

### 2. Execution Order
1. **Start Backend**: `npm run start:dev` (Runs on `http://localhost:5000`)
2. **Start Web**: `npm run dev` (Runs on `http://localhost:3001`)
3. **Start Mobile**: Update `lib/services/api_service.dart` with your Local IP and run `flutter run`.

---

## Key Ecosystem Features

- ✅ **Data Consistency**: Shared API logic ensures identical data across Web and Mobile.
- ✅ **Search & Filter**: High-performance search by reference, client name, or ID on all platforms.
- ✅ **Professional Aesthetic**: High-quality design featuring dark mode and glassmorphism.
- ✅ **Scalability**: Decoupled architecture allowing independent deployment and updates.

---

*This project is built and maintained by **Emmanuel Success** as part of the Full-Stack Developer Assessment.*
