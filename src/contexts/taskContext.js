import { createContext, useState } from "react";



export const TaskContext = createContext();

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([
        {
            title: 'Shop',
            description: 'Buy bread, milk',
            image: 'https://www.kare-design.com/wp-content/uploads/2015/08/2.jpg',
            isDone: false
        },
 
        {
            title: 'Shop',
            description: 'Buy coffee, butter',
            image: 'https://www.m-a.org.uk/resources/Shop-Logo.jpg',
            isDone: false
        },
        {
            title: 'Shop',
            description: 'Buy nutella, nuts',
            image: 'https://thumbs.dreamstime.com/z/%D0%B7-%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D0%B0-33822015.jpg',
            isDone: false
        }
    ]);

    return (
        <TaskContext.Provider value={[tasks, setTasks]}>
            {props.children}
        </TaskContext.Provider>
    )

}