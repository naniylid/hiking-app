import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import close from '../../assets/img/list-arrows/close.svg';

const List: React.FC = () => {
  // State variables
  const [tasks, setTasks] = useState([]); // Holds the list of tasks
  const [inputValue, setInputValue] = useState(''); // Holds the value of the input field
  const [filter, setFilter] = useState('all'); // Holds the current filter type
  const [isLoading, setIsLoading] = useState(true); // Indicates whether the data is being loaded
  const [editTaskId, setEditTaskId] = useState(null); // Holds the ID of the task being edited

  // Fetch initial data
  useEffect(() => {
    fetchTodos();
  }, []);

  // Fetch todos from an API
  const fetchTodos = async () => {
    try {
      const response = await fetch(
        `https://65746aecf941bda3f2afba20.mockapi.io/toDo?id=1`
      );
      const todos = await response.json();
      setTasks(todos);
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching todos:', error);
      setIsLoading(false);
    }
  };

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Add a new task
  const handleAddTask = async () => {
    if (inputValue.trim() === '') {
      return;
    }

    const newTask = {
      title: inputValue,
      completed: false,
    };

    try {
      const response = await fetch(
        'https://65746aecf941bda3f2afba20.mockapi.io/toDo',
        {
          method: 'POST',
          body: JSON.stringify(newTask),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      const addedTask = await response.json();
      setTasks((prevTasks) => [...prevTasks, addedTask]);
      setInputValue('');
      toast.success('Task added successfully');
    } catch (error) {
      console.log('Error adding task:', error);
      toast.error('Error adding task');
    }
  };

  // Handle checkbox change for a task
  const handleTaskCheckboxChange = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    toast.success('Task deleted successfully');
  };

  // Edit a task
  const handleEditTask = (taskId) => {
    setEditTaskId(taskId);
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setInputValue(taskToEdit.title);
  };

  // Update a task
  const handleUpdateTask = async () => {
    if (inputValue.trim() === '') {
      return;
    }

    const updatedTask = {
      title: inputValue,
      completed: false,
    };

    try {
      const response = await fetch(
        `https://65746aecf941bda3f2afba20.mockapi.io/toDo?id=${editTaskId}`,
        {
          method: 'PUT',
          body: JSON.stringify(updatedTask),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );
      const updatedTaskData = await response.json();
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editTaskId
            ? { ...task, title: updatedTaskData.title }
            : task
        )
      );
      setInputValue('');
      setEditTaskId(null);
      toast.success('Task updated successfully');
    } catch (error) {
      console.log('Error updating task:', error);
      toast.error('Error updating task');
    }
  };

  // Handle filter change
  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'uncompleted') {
      return !task.completed;
    }
    return true;
  });

  // Display loading message while data is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {tasks.map((id) => (
        <div className="list-block">
          <div className="list-head">
            <img src={id.image} alt="todo-image" />
            <h2>{id.title}</h2>
            <img src={close} alt="" />
          </div>
          <div className="row">
            <i className="fas fa-list-check"></i>
            <input
              type="text"
              className="add-task"
              id="add"
              placeholder="Add your todo"
              autoFocus
              value={inputValue}
              onChange={handleInputChange}
            />
            <button
              id="btn"
              onClick={editTaskId ? handleUpdateTask : handleAddTask}
            >
              {editTaskId ? 'Update' : 'Add'}
            </button>
          </div>

          <ul id="list">
            {filteredTasks.map((task) => {
              const { items, id } = task;
              return items.map((item) => (
                <li key={id}>
                  <input
                    type="checkbox"
                    id={`task-${id}`}
                    data-id={id}
                    className="custom-checkbox"
                    checked={id.completed}
                    onChange={() => handleTaskCheckboxChange(id)}
                  />
                  <label htmlFor={`task-${id}`}>{item}</label>
                  <div>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
                      className="edit"
                      data-id={id}
                      onClick={() => handleEditTask(id)}
                    />
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3096/3096673.png"
                      className="delete"
                      data-id={id}
                      onClick={() => handleDeleteTask(id)}
                    />
                  </div>
                </li>
              ));
            })}
          </ul>

          <div className="filters">
            <div className="dropdown">
              <button className="dropbtn">Filter</button>
              <div className="dropdown-content">
                <a href="#" id="all" onClick={() => handleFilterChange('all')}>
                  All
                </a>
                <a
                  href="#"
                  id="rem"
                  onClick={() => handleFilterChange('uncompleted')}
                >
                  Uncompleted
                </a>
                <a
                  href="#"
                  id="com"
                  onClick={() => handleFilterChange('completed')}
                >
                  Completed
                </a>
              </div>
            </div>

            <div className="completed-task">
              <p>
                Completed:{' '}
                <span id="c-count">
                  {tasks.filter((task) => task.completed).length}
                </span>
              </p>
            </div>
            <div className="remaining-task">
              <p>
                <span id="total-tasks">
                  Total Tasks: <span id="tasks-counter">{tasks.length}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
