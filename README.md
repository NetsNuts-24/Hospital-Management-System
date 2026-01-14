# Hospital Management System

1. Identify real-world healthcare requirements
2. Design modular system
3. Implement patient and appointment management.
4. Evaluate system usability and reliability.

Note: This project is a work in progress.

## Features

### User Roles

| Role | Permissions |
| ----------- | ----------- |
| Admin | Manage doctors, view all data |
| Doctor | View appointments, patient records |
| Receptionist | Book appointments |

### Patient Management

Functions:
- Add new patient
- Update patient details
- View patient history
- Search patient by ID / name

Data stored:
- Patient ID
- Name, age, gender
- Contact info
- Medical history (basic)

### Doctor Management
- Add doctor
- Assign department (Cardiology, ENT, etc.)
- View doctor availability
- Assign appointment slots

### Appointment Management
- Book Appointment
- Cancel Appointment
- Prevent double booking
- Assign time slots
- View daily schedule

### Department Management
Each doctor belongs to a department.

### Medical Records
- Visit date
- Symptoms
- Doctor notes
- Prescribed medicine

### Billing System
- Generate bill
- Add consultation fees
- Show payment status

### Dashboard
- Total patients
- Appointments today
- Available doctors
