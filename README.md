# 🏥 Medical Database Management System

![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue.svg) ![Supabase](https://img.shields.io/badge/Backend-Supabase-29b5a2.svg) ![License](https://img.shields.io/badge/License-MIT-green.svg)

## 📋 Objective
The project aims to design and implement a scalable and well-structured medical database system.  
It manages patients, doctors, billing, prescriptions, room allocations, inventory, emergency cases, and staff records.  
The database ensures data consistency, avoids redundancy, and maintains strong relationships between entities.

## 📂 Project Overview
- **Main Features:**
  - Patient registration and management.
  - Doctor management and specialization tracking.
  - Room assignment and availability tracking.
  - Medicine inventory management.
  - Bill and payment processing.
  - Prescription issuance with stock validation.
  - Emergency cases and staff allocation management.

- **Key Highlights:**
  - UUIDs are used for patient IDs for better scalability.
  - Foreign key constraints to maintain referential integrity.
  - Custom triggers and functions for automating stock checks and room availability.
  - Fully normalized structure for efficient data handling.

## 🛠️ Technologies Used
- Supabase (PostgreSQL-based backend)
- SQL (DDL, DML, Triggers, Functions)

## 🚀 How to Run
1. Set up a Supabase project.
2. Create the tables using the provided SQL schemas.
3. Add the required functions and triggers.
4. Insert data through SQL queries or API integrations.

## 📈 Future Improvements
- Add a web dashboard for hospital staff.
- Set up real-time notifications for low inventory.
- Develop API endpoints for external integrations.
- Implement authentication for different user roles (admin, doctor, receptionist).

## 🤝 Contributing
Pull requests are welcome. Feel free to suggest improvements or new features!

## 📜 License
This project is licensed under the **MIT License**.
