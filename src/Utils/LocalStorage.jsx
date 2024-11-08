import { fromJSON } from "postcss"

 


    const employees = [
        {
          "id": 1,
          "email": "employee@example.com",
          "password": "123",
          "tasks": [
            {
              "status": false,
              "newTask": true,
              "complete": false,
              "failed": false,
              "taskTitle": "Fix Bug #102",
              "taskDescription": "Resolve the issue related to the login form validation.",
              "taskCategory": "Development",
              "taskDate": "2024-10-21"
            }
          ]
        },
        {
          "id": 2,
          "email": "employee@example.com",
          "password": "123",
          "tasks": [
            {
              "status": true,
              "newTask": false,
              "complete": true,
              "failed": false,
              "taskTitle": "Prepare Sales Report",
              "taskDescription": "Generate and submit the Q3 sales report.",
              "taskCategory": "Reporting",
              "taskDate": "2024-10-19"
            }
          ]
        },
        {
          "id": 3,
          "email": "employee@example.com",
          "password": "123",
          "tasks": [
            {
              "status": false,
              "newTask": true,
              "complete": false,
              "failed": false,
              "taskTitle": "Design Homepage",
              "taskDescription": "Create a mockup design for the new homepage layout.",
              "taskCategory": "Design",
              "taskDate": "2024-10-22"
            }
          ]
        },
        {
          "id": 4,
          "email": "employee@example.com",
          "password": "123",
          "tasks": [
            {
              "status": true,
              "newTask": false,
              "complete": false,
              "failed": true,
              "taskTitle": "Client Meeting",
              "taskDescription": "Attend the project kickoff meeting with client ABC.",
              "taskCategory": "Meetings",
              "taskDate": "2024-10-20"
            }
          ]
        },
        {
          "id": 5,
          "email": "employee@example.com",
          "password": "123",
          "tasks": [
            {
              "status": true,
              "newTask": false,
              "complete": true,
              "failed": false,
              "taskTitle": "Database Backup",
              "taskDescription": "Perform a backup of the production database.",
              "taskCategory": "Maintenance",
              "taskDate": "2024-10-18"
            }
          ]
        }
      ]
      
      const admin = [
        {
          "id": 6,
          "email": "admin@example.com",
          "password": "123"
        }
      ]
      
export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage =()=>{
    
    const employee = JSON.parse(localStorage.getItem('employees'))

    const admin = JSON.parse(localStorage.getItem('admin'))
}