const creatingTask = (taskName, taskId) => {

  return `<article id="${taskId}" class="todolist__item">
            <span>${taskName}</span>
            <div class="todolist__item-control">
              <i class="fa-solid fa-pen-to-square todolist__item-pen" data-action="edit"></i>
              <i class="fa-sharp fa-solid fa-trash todolist__item-trash" data-action="delete"></i>
            </div>  
          </article>`
}

export {creatingTask}