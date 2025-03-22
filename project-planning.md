# Personal Portfolio Website
##  Advanced Web Development - Project Phase 1

## Project Overview
For this course project, I'm going to build a personal portfolio website to showcase my work and skills. I need a place to display my projects and make it easier for potential employers to learn about me. I've been wanting to make a portfolio site for a while, and this course gives me the perfect opportunity to finally do it right.

The site will have sections for my projects, skills, a little about me, and a way for people to contact me. I want it to look professional but also show some personality. The main goal is to create something that makes a good impression and helps me stand out when applying for jobs.

### Logbook
[Link to Logbook](https://github.com/Aliipou/Web-project/blob/main/logbook.md))

### Project Team
- [Ali Pourrahim]


---

## 1. User Personas

### Persona 1: Pekka - Hiring Manager
- **Age:** 38
- **Job:** Tech company hiring manager
- **Tech knowledge:** Knows the industry but isn't super technical
- **What she wants:**
  - To quickly see if I have the skills her company needs
  - To see examples of my work that relate to their projects
  - To get a sense of who I am and how I communicate
  - To easily find my resume and contact info
- **Pain points:**
  - Too busy to spend a lot of time on each portfolio
  - Gets annoyed by portfolios that are hard to navigate
  - Dislikes when project descriptions are vague
- **How she'd use my site:**
  Sarah would probably spend 2-3 minutes scanning my site. She'd check my projects first, then look at my skills section to match them against their job requirements. If interested, she'd look for a way to download my resume and possibly contact me.

### Persona 2: Olivia - Small Business Owner
- **Age:** 42
- **Job:** Owns a local retail business
- **Tech knowledge:** Uses technology but doesn't understand how it works
- **What he wants:**
  - To see if I can build something like what he needs
  - To understand if I'm reliable and professional
  - To get a rough idea of what I might charge
  - To easily contact me about his project
- **Pain points:**
  - Gets confused by technical jargon
  - Worried about being overcharged
  - Has been burned by flaky freelancers before
- **How he'd use my site:**
  Mike would focus on the visual examples of my work and any testimonials. He'd be looking for similar projects to what he needs, and would want to see that I explain things clearly. He'd definitely use the contact form if he liked what he saw.

### Persona 3: janne - Fellow Developer
- **Age:** 27
- **Job:** Junior web developer
- **Tech knowledge:** Good technical understanding, still learning
- **What they want:**
  - To see what technologies I use
  - To get ideas for their own portfolio
  - To understand how I solved technical problems
  - To possibly connect professionally
- **Pain points:**
  - Disappointed when portfolios don't show how things were built
  - Wants to see code but often can't find it
- **How they'd use my site:**
  Jamie would check out the technical details of my projects and probably look for links to my GitHub. They'd be interested in both what I built and how I built it, including the technologies I used and any interesting solutions to problems.

---

## 2. Use Cases and Usage Scenarios

### Use Case 1: Browsing My Projects
**Who:** Any visitor
**What they're doing:** Looking through my portfolio projects

**Scenario:**
1. Sarah lands on my homepage after receiving my job application
2. She sees a featured project section and scrolls through it
3. She spots a project that seems relevant to her company's work
4. She clicks on it to get more details
5. The project page shows her:
   - Some screenshots/images of the project
   - What problem the project solved
   - What technologies I used
   - My role in the project
   - Any challenges and how I overcame them
6. She can easily click through the images to see more
7. At the bottom, she finds links to similar projects
8. She uses the navigation to go back to the main portfolio page to check out other work

### Use Case 2: Contacting Me
**Who:** Potential client or employer
**What they're doing:** Reaching out to discuss a job or project

**Scenario:**
1. Mike has looked at my projects and wants to discuss a website for his store
2. He clicks the "Contact" link in the navigation
3. The contact page gives him options:
   - A simple form to fill out
   - My email address
   - Links to my LinkedIn and other professional profiles
4. He chooses the form and fills in:
   - His name and email
   - A brief description of what he needs
   - How he'd prefer I contact him back
5. He submits the form and gets a message confirming it went through
6. He receives an automated email letting him know I'll respond soon
7. I get notified about his message so I can follow up

### Use Case 3: Checking Out My Skills and Experience
**Who:** Potential employer
**What they're doing:** Seeing if my skills match their needs

**Scenario:**
1. Pekka wants to check if I have the right experience for her open position
2. he clicks on the "Skills" or "About Me" section
3. he finds a visual representation of my skills grouped by category
4. he can see at a glance what I'm most experienced with
5. Below that, he finds a timeline of my work history and education
6. he can expand each job/project to see more details about what I did
7. he notices a button to download my full resume as a PDF
8. he downloads it to share with her team

---

## 3. UI Sketches

I've sketched some rough ideas for the main pages of my portfolio. These aren't final designs, but they give an idea of the layout and content organization I'm thinking about.

### Homepage
![Home Page Sketch](./wireframes/home_sketch.png)
- A hero section with my name and what I do
- A brief intro about me and my skills
- Featured projects with images
- Simple navigation to other sections

### Projects Page
![Projects Page Sketch](./wireframes/projects_sketch.png)
- Grid of project thumbnails
- Filtering options by technology or type
- Each thumbnail shows a preview image and title
- Maybe some hover effects to show a brief description

### Project Detail Page
![Project Detail Sketch](./wireframes/project_detail_sketch.png)
- Large images of the project
- Description of what it is and what it does
- List of technologies used
- My role and responsibilities
- Challenges and solutions
- Links to live site or GitHub repo if available

### Skills & Experience Page
![Skills Page Sketch](https://ibb.co/QqT402R)
- Visual representation of skills (maybe a chart?)
- Grouped by category (frontend, backend, tools, etc.)
- Work experience timeline
- Education section
- Download resume button

### Contact Page
![Contact Page Sketch](https://ibb.co/rKjGwF0n)
- Simple contact form
- Alternative contact methods
- Social media/professional links
- Maybe a small map if I want to show my general location

---

## 4. Technical Plan

### Site Structure
```
My Portfolio Website
├── Frontend
│   ├── Assets (images, resume PDF, etc.)
│   ├── Components
│   │   ├── Navigation/Header
│   │   ├── Project Card
│   │   ├── Project Gallery
│   │   ├── Skills Chart
│   │   ├── Contact Form
│   │   └── Footer
│   └── Pages
│       ├── Home
│       ├── Projects
│       ├── Project Detail
│       ├── About/Skills
│       └── Contact
├── Backend (maybe, for contact form)
│   ├── Form handling
│   └── Email sending
└── Database (maybe, if I want to be able to update content easily)
    ├── Projects
    ├── Skills
    └── Experience
```

I'm not sure yet if I'll need a full backend or database. I might start with a static site and add those features later if needed.

### Technologies I'm Considering

**Frontend:**
- React (since we're learning it in this course)
- CSS (probably with Tailwind since I've been wanting to try it)
- Some animation library for nice effects (maybe Framer Motion)

**Backend (if needed):**
- Node.js with Express for handling the contact form
- Maybe a simple API for getting project data

**Database (if needed):**
- Could use MongoDB for storing project info
- Or might just use JSON files if it's simple enough

**Deployment:**
- GitHub Pages if it's just a static site
- Netlify or Vercel for the frontend
- Maybe Heroku for backend if I need one

---

## 5. Project Plan

### Timeline
This is a rough estimate of how I'll break down the work:

- **Weeks 1-2:** Finalize designs, choose technologies, set up project structure
- **Weeks 3-4:** Build basic layout and homepage
- **Weeks 5-6:** Create projects section and individual project pages
- **Weeks 7-8:** Develop about/skills section
- **Weeks 9-10:** Add contact form and functionality
- **Weeks 11-12:** Testing, fixing issues, and making improvements
- **Weeks 13-14:** Final touches and optimization
- **Week 15:** Prepare for final submission

### Testing Plan

I want to make sure the site works well, so I'll:
- Test on different browsers (Chrome, Firefox, Safari, Edge)
- Check how it looks on mobile devices and tablets
- Ask a few friends to try using it and give feedback
- Make sure everything is accessible (alt text, keyboard navigation, etc.)

I'll keep track of any issues I find and fix them before submitting.

### Success Measures

I'll know the project is successful if:
- Visitors can easily find and view my projects
- The contact form works properly
- The site looks good on all screen sizes
- Page load times are fast
- It passes basic accessibility checks
- I've learned new skills building it

---

## Next Steps

1. Create more detailed wireframes
2. Decide on final technology choices
3. Gather content (project descriptions, images, etc.)
4. Set up development environment
5. Start building the basic structure

I'd appreciate any feedback on this plan before I start implementation!
