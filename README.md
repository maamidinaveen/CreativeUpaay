# Creative Upaay Dashboard

A **React.js** dashboard UI replicating the design from Figma, with task management, filtering, and persistent state using **Redux** and **Local Storage**.

---

## **Figma Design**

[View Figma Design](https://docs.google.com/document/d/1f3WtVKAhxMyPSBIMgwZLNATjTtypqHrAagZ-J8iNv7Y/edit?tab=t.0)

## **Features**

- Dashboard UI with three task sections:
  - **To Do**
  - **In Progress**
  - **Done**
- Add tasks dynamically with:
  - Title
  - Priority (Low, Medium, High)
  - Status (To Do, In Progress, Done)
  - Due Date
- Filter tasks by:
  - Priority
  - Due Date (Today, Tomorrow, This Week, Overdue)
- State persistence using Local Storage
- Routing between **Home** and **Add Task** pages using React Router

---

## **Technologies Used**

- **React.js** – Frontend framework
- **Redux** – State management
- **React Router DOM** – Routing
- **Local Storage** – Persisting tasks & filters
- **CSS** – Custom styling
- Optional: Material UI / Chakra UI / Tailwind CSS (for future UI upgrades)

---

## **Project Structure**

src/
├─ components/
│ ├─ AddTaskPage/
│ ├─ Content/
│ ├─ Filter/
│ ├─ Header/
│ ├─ SideBar/
│ └─ TaskCard/
├─ redux/
│ ├─ actions.js
│ ├─ reducer.js
│ └─ store.js
├─ App.js
└─ index.js

**Key Components:**

- `SideBar` – Left navigation with projects & menu
- `Header` – Top header with search, notifications, profile
- `Content` – Main dashboard showing task columns
- `TaskCard` – Individual task card
- `Filter` – Dropdown filters for priority & due date
- `AddTaskPage` – Form to add new tasks

**Usage**

- Navigate between the Home and Add Task pages.

- Add a new task using the form (title, priority, status, due date).

- Filter tasks using the priority and due date dropdowns.

- View tasks dynamically in each section: To Do, In Progress, Done.

- State is persisted, so tasks remain on page refresh.

**Future Enhancements**

Drag-and-drop functionality to move tasks between columns

Dynamic task descriptions in TaskCard

Responsive layout for mobile screens

Interactive notifications for task updates

Integration with backend API for persistent multi-user data

### **Running setup**

Navigate to the project folder - command : cd creative-upaay-dashboard

Install dependencies - command : npm install

Running the Application- command: npm start
