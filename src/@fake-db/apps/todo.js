import mock from '../mock'

const data = {
  tasks: [
    {
      id: 1,
      title: 'Sri. Gunananda College',
      dueDate: '2020-11-25',
      description:
        'Grade 11 maths class - Ananda College',
      assignee: {
        fullName: 'Jacob Ramirez',
        avatar: ''
      },
      tags: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false
    },
    {
      id: 2,
      title: 'S.T Sebastian College',
      dueDate: '2020-12-14',
      description:
        '',
      assignee: {
        fullName: 'Andrew Anderson',
        avatar: ''
      },
      tags: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      isCompleted: true,
      isDeleted: false,
      isImportant: false
    },
    {
      id: 3,
      title: 'Good Shepherd',
      dueDate: '2020-11-25',
      description:
        '',
      assignee: {
        fullName: 'Benjamin Jacobs',
        avatar: ''
      },
      tags: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false
    },
    {
      id: 4,
      title: 'ST. Anthony B.M.V College/',
      dueDate: '2020-11-20',
      description:
        '',
      assignee: {
        fullName: 'Curtis Schmidt',
        avatar: ''
      },
      tags: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      isCompleted: false,
      isDeleted: false,
      isImportant: true
    },
    {
      id: 5,
      title: 'ST. Mathews College',
      dueDate: '2020-12-06',
      description:
        '',
      assignee: {
        fullName: 'Katherine Perkins',
        avatar: ''
      },
      tags: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      isCompleted: true,
      isDeleted: false,
      isImportant: true
    },
    {
      id: 6,
      title: 'ST.JOHNS College',
      dueDate: '2020-12-06',
      description:
        '',
      assignee: {
        fullName: 'David Murphy',
        avatar: ''
      },
      tags: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      isCompleted: true,
      isDeleted: true,
      isImportant: false
    },
    {
      id: 7,
      title: 'SRI Parakkramabahu College',
      dueDate: '2020-12-05',
      description:
        '',
      assignee: {
        fullName: 'Karina Miller',
        avatar: ''
      },
      tags: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      isCompleted: false,
      isDeleted: false,
      isImportant: true
    },
    {
      id: 8,
      title: 'ST. Luicias College',
      dueDate: '2020-12-08',
      description:
        '',
      assignee: {
        fullName: 'Thomas Moses',
        avatar: ''
      },
      tags: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false
    },
    {
      id: 9,
      title: 'Lumbini College',
      dueDate: '2020-11-25',
      description:
        '',
      assignee: {
        fullName: 'Angel Morrow',
        avatar: ''
      },
      tags: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      isCompleted: false,
      isDeleted: true,
      isImportant: false
    },
    {
      id: 10,
      title: 'Vishaka College',
      dueDate: '2020-12-09',
      description:
        '',
      assignee: {
        fullName: 'Karen Carrillo',
        avatar: ''
      },
      tags: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      isCompleted: true,
      isDeleted: false,
      isImportant: false
    },
    {
      id: 11,
      title: 'Sirimavo Bandaranayake ',
      dueDate: '2020-12-01',
      description:
        '',
      assignee: {
        fullName: 'Timothy Brewer',
        avatar: ''
      },
      tags: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      isCompleted: true,
      isDeleted: false,
      isImportant: true
    },
    {
      id: 12,
      title: 'Mahanama College',
      dueDate: '2020-12-09',
      description:
        '',
      assignee: {
        fullName: 'Brian Barry',
        avatar: ''
      },
      tags: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false
    },
    {
      id: 13,
      title: "Thurstan College",
      dueDate: '2020-12-01',
      description:
        '',
      assignee: {
        fullName: 'Joshua Golden',
        avatar: ''
      },
      tags: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false
    },
    {
      id: 14,
      title: 'Royal College',
      dueDate: '2020-11-29',
      description:
        '',
      assignee: {
        fullName: 'Paula Hammond',
        avatar: ''
      },
      tags: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      isCompleted: true,
      isDeleted: false,
      isImportant: true
    },
    {
      id: 15,
      title: 'Nalanda College',
      dueDate: '2020-11-29',
      description:
        '',
      assignee: {
        fullName: 'Tyler Garcia',
        avatar: ''
      },
      tags: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false
    },
    {
      id: 16,
      title: 'D.S. Senanayake College',
      dueDate: '2020-12-12',
      description:
        '',
      assignee: {
        fullName: 'Darlene Shields',
        avatar: ''
      },
      tags: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      isCompleted: true,
      isDeleted: false,
      isImportant: false
    },
    {
      id: 17,
      // title: 'Plan a party for development team 🎁',
      title: 'Isipathana College',
      dueDate: '2020-12-04',
      description:
        '',
      assignee: {
        fullName: 'Destiny Michael',
        avatar: ''
      },
      tags: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false
    },
    {
      id: 18,
      title: 'Ananda College',
      dueDate: '2020-11-18',
      description:
        '',
      assignee: {
        fullName: 'Danielle Anderson',
        avatar: ''
      },
      tags: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
      isCompleted: false,
      isDeleted: false,
      isImportant: true
    }
  ]
}

// ------------------------------------------------
// GET: Return Tasks
// ------------------------------------------------
mock.onGet('/apps/todo/tasks').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', filter, tag, sortBy: sortByParam = 'latest' } = config.params
  /* eslint-enable */
  // ------------------------------------------------
  // Get Sort by and Sort Direction
  // ------------------------------------------------
  let sortDesc = true

  const sortBy = (() => {
    if (sortByParam === 'title-asc') {
      sortDesc = false
      return 'title'
    }
    if (sortByParam === 'title-desc') return 'title'
    if (sortByParam === 'assignee') {
      sortDesc = false
      return 'assignee'
    }
    if (sortByParam === 'due-date') {
      sortDesc = false
      return 'dueDate'
    }
    return 'id'
  })()

  // ------------------------------------------------
  // Filtering
  // ------------------------------------------------
  const queryLowered = q.toLowerCase()

  const hasFilter = task => {
    if (filter === 'important') return task.isImportant && !task.isDeleted
    if (filter === 'completed') return task.isCompleted && !task.isDeleted
    if (filter === 'deleted') return task.isDeleted
    return !task.isDeleted
  }
  /* eslint-disable */
  const filteredData = data.tasks.filter(task => {
    return task.title.toLowerCase().includes(queryLowered) && hasFilter(task) && (tag ? task.tags.includes(tag) : true)
  })
  /* eslint-enable  */

  // ------------------------------------------------
  // Perform sorting
  // ------------------------------------------------
  const sortTasks = key => (a, b) => {
    let fieldA
    let fieldB

    // If sorting is by dueDate => Convert data to date
    if (key === 'dueDate') {
      fieldA = new Date(a[key])
      fieldB = new Date(b[key])
      // eslint-disable-next-line brace-style
    }

    // If sorting is by assignee => Use `fullName` of assignee
    else if (key === 'assignee') {
      fieldA = a.assignee ? a.assignee.fullName : null
      fieldB = b.assignee ? b.assignee.fullName : null
    } else {
      fieldA = a[key]
      fieldB = b[key]
    }

    let comparison = 0

    if (fieldA === fieldB) {
      comparison = 0
    } else if (fieldA === null) {
      comparison = 1
    } else if (fieldB === null) {
      comparison = -1
    } else if (fieldA > fieldB) {
      comparison = 1
    } else if (fieldA < fieldB) {
      comparison = -1
    }

    return comparison
  }

  // Sort Data
  const sortedData = filteredData.sort(sortTasks(sortBy))
  if (sortDesc) sortedData.reverse()
  return [200, sortedData]
})

// ------------------------------------------------
// POST: Add new task
// ------------------------------------------------
mock.onPost('/apps/todo/add-tasks').reply(config => {
  // Get event from post data
  const { task } = JSON.parse(config.data)

  const { length } = data.tasks
  let lastIndex = 0
  if (length) {
    lastIndex = data.tasks[length - 1].id
  }
  task.id = lastIndex + 1

  data.tasks.push(task)

  return [201, { task }]
})

// ------------------------------------------------
// POST: Update Task
// ------------------------------------------------
mock.onPost('/apps/todo/update-task').reply(config => {
  const taskData = JSON.parse(config.data).task

  // Convert Id to number
  taskData.id = Number(taskData.id)

  const task = data.tasks.find(e => e.id === Number(taskData.id))
  Object.assign(task, taskData)

  return [200, { task }]
})

// ------------------------------------------------
// DELETE: Remove Task
// ------------------------------------------------
mock.onDelete('/apps/todo/delete-task').reply(config => {
  // Get task id from URL
  let taskId = config.taskId

  // Convert Id to number
  taskId = Number(taskId)

  const task = data.tasks.find(t => t.id === taskId)
  Object.assign(task, { isDeleted: true })
  return [200]
})
