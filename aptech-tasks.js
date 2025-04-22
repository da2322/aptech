/*
  ================================
  TASK 1: PERSONAL BUDGET ANALYZER
  ================================

  Description:
  You are to create a simple budget analysis tool that helps a person track their monthly income and expenses,
  calculates remaining balance, and gives feedback on spending behavior.

  The entire interaction should happen using hardcoded arrays and objects — no prompt or HTML input.

  Requirements:
  1. Use an object named budget with the following properties:
     - income: a number
     - expenses: an array of expense objects, each with:
       - title: string
       - amount: number
       - category: one of ["food", "transport", "utilities", "entertainment", "misc"] (just one sstring ooo, not an array)

     There should be at least 6 expenses covering at least 4 different categories.

  2. Use .reduce() to calculate the total expenses.

  3. Subtract expenses from income to get the balance.

  4. Use if/else to provide personalized financial advice:
     - If expenses > income → "You are overspending!"
     - If balance < 20% of income → "You're cutting it close. Consider reducing entertainment or misc expenses."
     - Else → "You're doing well. Keep it up!"

  5. Use .filter() and .map() to:
     - Extract all expenses in the “entertainment” category
     - Return their titles in UPPERCASE (use string methods)

  6. Use switch-case to give a small description based on the category of each expense.
     Example:
       - "food" → "Essential daily need"
       - "transport" → "Mobility expense"
       - "utilities" → "Household necessity"
       - "entertainment" → "Optional luxury"
       - "misc" → "Other"

  7. Use at least one of push, pop, shift, or unshift to modify the expenses array.
     Explain your choice in a comment — why did you use push() instead of unshift(), or vice versa?

  8. Create a function named analyzeBudget that takes the budget object and returns a summary string.
     Pass that function to another function as a callback that logs the returned summary.

  9. Use Date object to get the current month, and include it in the budget summary.
     Example: "Budget Summary for April"

  10. Use Math.round() to neatly format money values.

  Answer these questions too:
  - Why did you use `let` or `const` for each variable?
  - Why is `unshift()` possibly not ideal when adding expenses?
  - Why did you use `.map()` instead of a regular loop in step 5?
  - Did you choose a function declaration or expression? Why?
  - In what way did using a callback add clarity or separation of logic?
*/

/*
  ================================
  TASK 2: SIMPLE FITNESS TRACKER
  ================================

  Description:
  Build a console-based fitness tracker that records workouts over a week, summarizes total time,
  suggests calories burned, and comments on workout intensity.

  Requirements:
  1. Create an array named `workouts` with at least **7 entries**. Each entry is an object:
     - `day`: string (e.g., "Monday")
     - `type`: string (choose among at least 4 types: "Cardio", "Strength", "Flexibility", "Balance")
     - `duration`: number (minutes, between 20 and 90)

  2. Normalize all `type` values to lowercase and trim whitespace using string methods (`.toLowerCase()`, `.trim()`).

  3. Use `push()` to add **2** new workouts and `pop()` to remove the last one.  
     Use `unshift()` to add an urgent workout at the start and `shift()` to remove the first.

  4. Calculate **total duration** with `.reduce()` and round to nearest minute with `Math.round()`.

  5. Use `.filter()` to extract workouts longer than 30 minutes; list how many and which days.

  6. Use `.map()` to create an array of strings in the format:
     `"<DAY>: <TYPE> (<DURATION> mins)"`.

  7. Use `switch-case` on each workout’s `duration`:
     - `<30` → "Low intensity"
     - `30–60` → "Moderate intensity"
     - `>60` → "High intensity"

  8. Simulate calories burned per workout with:
     `Math.floor(Math.random() * (500 - 100 + 1) + 100)`  
     Show total estimated calories burned.

  9. Use the `Date` object to get today’s date and indicate which workouts (if any) fall on that day.

  10. Write a function `processWorkouts(workouts, callback)` that takes the array and a callback,
      and invokes the callback with the summary object:
      ```js
      {
        totalWorkouts: number,
        totalDuration: number,
        longWorkouts: [...],
        calories: number
      }
      ```

   Answer these questions too:
  - Why choose `const` for `workouts` even though you mutate it?
  - What are trade‑offs of using `shift()` in an array?
  - Why use `.reduce()` versus a simple loop for total duration?
  - How does a callback in `processWorkouts` improve flexibility?
  - Why normalize strings early with `.toLowerCase()`?
*/

/*
  ================================
  TASK 3: SIMPLE TO-DO PRIORITIZER
  ================================

  Description:
  Create a console to-do list that supports priority tagging, cleaning inputs, and custom display.

  Requirements:
  1. Create an array `toDos` with at least 6 raw task strings (include extra spaces, mixed case).
  
2. Clean each task string using `.split()`, `.trim()`, and `.join(' ')` so words are single‑spaced,
     and convert to lowercase.

  3. Use `push()` to add **2 new tasks** and `pop()` to remove the last one.
     Use `unshift()` to insert a top‑priority task and `shift()` to remove the first.

  4. For each cleaned task, assign an `urgency` level via `switch-case` on keywords:
     - contains "urgent" → "High"
     - contains "soon" → "Medium"
     - default → "Low"

  5. Build an array of todo objects:
     ```js
     { title: cleanedString, urgency: "High"|"Medium"|"Low", addedOn: Date }
     ```

  6. Use `.filter()` to get all "High" urgency tasks and count them.

  7. Use `.map()` to produce display lines:
     `"[High] Buy groceries — added on 2025-04-15"`

  8. Use `.some()` to check if **any** "Low" urgency tasks remain.

  9. Create a function `displayTasks(tasks, callback)` that calls the callback
     to render either a detailed or compact list.

  

   Answer these questions too:
  - Why clean strings before tagging urgency?
  - When might `pop()` mislead in a to‑do app?
  - Why use `switch-case` instead of `if-else` for urgency?
  - How does `.some()` offer clarity over a manual loop?
  - Would you declare `displayTasks` with a function declaration or expression? Why?
*/

/*
  ================================
  TASK 4: SCHOOL SCORE ANALYZER
  ================================

  Description:
  Analyze student test scores, assign grades, and provide reports with drop‑lowest logic.

  Requirements:
  1. Create an array `students` with **5 students**. Each is:
     { name: "  Alice  ", scores: [65, 70, 80, 90] }

  2. Clean each `name` using `.trim()` and `.toUpperCase()`.

  3. For each student:
     a) Use `.pop()` to remove their lowest score.
     b) Use `Math.max()` and `Math.min()` to find highest and lowest remaining scores.
     c) Calculate average with `.reduce()` / length, round with `Math.round()`.

  4. Assign a `grade` via `switch-case` on average:
     - 90–100 → "A"
     - 80–89 → "B"
     - 70–79 → "C"
     - 60–69 → "D"
     - <60 → "F"

  5. Build a report object for each:
     ```js
     { name, average, grade, best: number, worst: number, analyzedOn: Date }
     ```

  6. Use `.map()` to collect all failing student names.

  7. Write a function `generateReport(data, callback)` that passes the array
     to callback for either summary (counts) or detailed output.

  
     Answer these questions too:
  - Why remove the lowest score with `.pop()`?
  - Why normalize names early?
  - When is `switch-case` clearer than chained `if`?
  - Why use a callback in `generateReport`?
  - Would you use `const` or `let` for `report` objects? Explain.
*/

/*
  ================================
  TASK 5: MINI SHOPPING ASSISTANT
  ================================

  Description:
  Simulate a small cart system: add/remove items, apply discounts, and suggest similar products.

  Requirements:
  1. Create an array `cart` with **4 items**:
     { name: "  apple ", price: 150, category: "Fruit" }

  2. Clean `name` using `.trim()` and capitalize first letter via string methods.

  3. Use `push()` to add **2** sale items, and `pop()` to remove the last one.
     Use `unshift()` to insert an urgent item, and `shift()` to remove the first.

  4. Use `.filter()` to list items under ₦200.

  5. Use `.map()` to apply a 10% discount and return new prices rounded with `Math.round()`.

  6. Use `switch-case` on `category` to suggest one related item per category.

  7. Calculate total cart value with `reduce()`.

  8. Use `Math.random()` to pick one item to give a surprise 50% extra discount.

  9. Tag each action with a `Date` timestamp.

  10. Write `checkout(cart, modeCallback)` where modeCallback displays:
      - "summary": only total and item count
      - "invoice": itemized list with prices



      Answer these questions too:
  - Why use `.filter()` over a loop here?
  - When might `unshift()` shift item order unexpectedly?
  - Why is a callback for `checkout` beneficial?
  - Would you choose a function expression for discounts? Why?
  - How does rounding with `Math.round()` affect pricing?
*/

/*
  =======================================
  TASK 6: LIFE SCHEDULE GENERATOR (Bonus)
  =======================================

  Description:
  Create a weekly planner tool that lets users add, remove, and analyze daily activities.

  Requirements:
  1. Create an array `weekPlan` with **7 days**:
     { day: "Monday", activities: ["Study", "Gym"] }

  2. Normalize each activity string with `.trim()` and `.toLowerCase()`.

  3. For a chosen day, use `push()` to add **2 new activities** and `pop()` to remove the last one.
     Use `unshift()` to add a high‑priority activity and `shift()` to remove the first.

  4. Use `.some()` to check if **any** day has a "gym" activity.

  5. Use `.every()` to verify all days have at least **1** activity.

  6. Use `switch-case` on activity type to recommend time blocks:
     - "study" → 2 hours
     - "gym"   → 1.5 hours
     - "rest"  → 1 hour
     - default → 30 mins

  7. Count how many times each recommendation appears using an object accumulator.

  8. Use `Math.floor(Math.random() * weekPlan.length)` to pick a random “surprise activity” day.

  9. Use the `Date` object to get today’s weekday and display its activities.

  10. Write `viewPlan(plan, viewCallback)`:
      - If `viewCallback` is `detailedView`, show days + activities + recommendations.
      - If `compactView`, show only day names.


 Answer these questions too:
  - Why prefer `.some()` over a manual loop for existence checks?
  - How can `.every()` simplify validation?
  - Why might `shift()` confuse chronological order?
  - How does using callbacks for views separate concerns?
*/
