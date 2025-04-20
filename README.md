# 🏥 MediSphere – Comprehensive Healthcare Management System

MediSphere is a full-stack healthcare management platform built to streamline patient care, staff operations, prescriptions, emergency handling, and inventory tracking. Designed for hospitals, clinics, and healthcare providers, MediSphere provides a secure, efficient, and intuitive interface for doctors, patients, and receptionists.

## 🚀 Tech Stack

**Frontend**:  
- [Next.js 15](https://nextjs.org/) with App Router  
- Tailwind CSS for responsive styling  
- TypeScript for type safety  

**Backend & Auth**:  
- [Supabase](https://supabase.com/) – PostgreSQL DB, Auth, and API  

**Database**:  
- Normalized relational schema for patients, doctors, prescriptions, shifts, inventory, and more.

---

## 📦 Features

### 👩‍⚕️ Doctor Dashboard
- View and manage patient data  
- Issue prescriptions and track history  
- View assigned shifts and records  
- Monitor and update inventory  
- Handle emergency cases with timestamped logs

### 🧑‍💼 Receptionist Portal
- Manage patient records and registrations  
- View shift details and working hours  
- Assist doctors in updating records

### 👨‍👩‍👧 Patient Portal
- Secure login and personalized profile  
- View prescriptions and diagnosis history  
- Emergency contact and medical history tracking

### ⚙️ Admin & System
- Role-based authentication using Supabase  
- Database relations with foreign keys  
- Real-time interactions with Supabase client  
- Clean, responsive UI using Tailwind CSS

---

## 🛠️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/eklavya172004/MediSphere.git
cd MediSphere
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env.local` file in the root and add:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the development server
```bash
npm run dev
```

---

## 🗂️ Project Structure (Frontend)
```
/app
  /login
  /signup
  /doc_dashboard
    /patients
    /prescriptions
    /profile
    /records
    /shift
    /inventory
    /emergency
    /receptionist
  /profile (patient dashboard)
  /api (route handlers)
```

---

## 🧩 Database Schema Highlights

- `patient`: Patient details + foreign key to `auth.users`
- `doctor`: Doctor profile with specialization
- `prescription`: Links to doctor, patient, medication, bill
- `emergency_cases`: Time, location, nature, patient involved
- `receptionist`, `shift`, `inventory`, `records`: Structured, normalized tables

---

## 🔐 Authentication & Authorization

- Email/password-based authentication via Supabase
- Role-specific redirection after login (`/doc_dashboard`, `/profile`, etc.)
- Role assignment stored in Supabase tables (`doctor`, `receptionist`, `patient`)

---

## 🧪 Coming Soon

- Admin Panel with analytics  
- Notifications for appointments and emergencies  
- Integration with SMS/email APIs  
- QR-code based patient ID system  

---

## 🤝 Contributing

Pull requests are welcome! Please open issues for bugs, suggestions, or enhancements.

```bash
git checkout -b feature/YourFeature
git commit -m "Add your feature"
git push origin feature/YourFeature
```

---

## 📃 License

MIT License

---

## 🧑‍💻 Author

Made with ❤️ by [@eklavya172004](https://github.com/eklavya172004),[@navya448](https://github.com/navya448),[@Ridhima0403](https://github.com/Ridhima0403),[Piyush-M12](https://github.com/Piyush-M12)

---

Want a markdown version or want this deployed as a `README.md` in your repo directly?
