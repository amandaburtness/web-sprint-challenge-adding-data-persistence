// build your `Task` model here
const db = require('../../data/dbConfig')

const getTasks = async () => {
  const results = await db('tasks as t')
    .leftjoin('projects as p', 'p.project_id', 't.project_id')
    .select('t.task_id', 't.task_description','t.task_notes', 't.task_completed','p.project_name','p.project_description')

  const tasks = []

  results.forEach(result => {
    tasks.push({
      task_id: result.task_id,
      task_description: result.task_description,
      task_notes: result.task_notes,
      task_completed: Boolean(result.task_completed),
      project_name: result.project_name,
      project_description: result.project_description
    })
  })

  return tasks
}

const addTask = (task) => {
  return db('tasks').insert(task)
}

module.exports = {
  getTasks,
  addTask
}