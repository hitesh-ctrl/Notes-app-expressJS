let notes=[
//     {
//     id: 1,
//     title:"Reflection",
//     content: "Over the past week, I’ve realized how much small changes in my daily routine affect my productivity. Starting the morning with a 15-minute walk and avoiding social media before noon helped me focus better during coding sessions. I should try sticking to this habit consistently for the next two weeks and track the outcome.",
//     time: Date()
//   },
//   {
//     id: 2,
//     title:"Coding",
//     content: "After reading more about RESTful API design, I understand how essential it is to keep endpoints predictable and resources stateless. Grouping endpoints by resource types and using proper HTTP methods like GET, POST, PUT, and DELETE makes the API much cleaner and easier to maintain. I plan to refactor my current project to follow this structure more closely.",
//     time: Date()
//   },
//   {
//     id: 3,
//     title:"Feedback",
//     content: "The feedback from yesterday’s team review was insightful. Although the UI design was well-received, the performance bottleneck in the dashboard graphs needs to be addressed. I’ll start by reducing redundant API calls and implementing a caching layer where necessary. Also need to explore charting libraries that are more lightweight.",
//     time: Date()
//   },
//   {
//     id: 4,
//     title:"blah blah",
//     content: "Today I explored EJS and how it integrates with Express. It’s fascinating how simple it is to embed JavaScript inside HTML templates. I still need to get comfortable with when to use logic in templates vs. keeping that in controllers, but it's making server-side rendering more intuitive than I expected.",
//     time: Date()
//   },
//   {
//     id: 5,
//     title:"lieeee ",
//     content: "Feeling overwhelmed with the number of tools I’m trying to learn at once. Maybe I should slow down and master a few core technologies like JavaScript, Node.js, and basic Express apps before jumping into full-stack frameworks. Prioritizing depth over breadth might help me build confidence and better project structure.",
//     time: Date()
//   }
]

export const getAllNotes=(search)=>{
    if(!search){
        return notes
    }
    return notes.filter(note=>note.title.includes(search) || note.content.includes(search))
  }
export const getNote=(id)=>{
    return notes.find(note => note.id===id)
  }
export const addNote=(note)=>{
    note["id"] = notes.length + 1;
    note["time"] = Date();
    note["title"] = note.title || "Untitled";
    note["content"] = note.content || "";
    notes.push(note)
  }
export const delNote=(id)=>{
    notes=notes.filter(note=>note.id !== id)
}
