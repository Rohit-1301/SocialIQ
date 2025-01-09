#SocialIQ

✨ Welcome to the Pre-Hackathon Assignment: Social Media Performance Analysis submission by SocialIQ. Our enthusiastic team includes:

👨‍💻 Rohit Gupta
👨‍💻 Aditya SIngh
👨‍💻 Kamraan Mulani 
👨‍💻 Afraz Hussain

## 🔧 About the Assignment

### 🎡 Goal
To create a simple analytics tool using Langflow and DataStax Astra DB that can analyze engagement data from sample social media accounts.

### ⏳ Deadline
January 8th

## 🛠 Tools and Technologies
- 📀 *DataStax Astra DB* for handling database operations efficiently.
- 🔄 *Langflow* for building workflows and integrating GPT.

## 📈 Tasks and Process

### 1. 🔍 Collect Engagement Data
We worked with a sample dataset that includes:
- ❤ Likes
- 💪 Shares
- 💬 Comments
- Different post formats (e.g., 🎢 carousels, 🎥 reels, 🖼 static images).

The data is stored in *DataStax Astra DB* for easy access and management.

### 2. 🔄 Analyze Post Performance
We designed a *Langflow workflow* to:
- 💡 Take input for the type of post.
- 🔎 Query Astra DB for the relevant data.
- 📈 Calculate average engagement for each post type.

### 3. 🕵 Generate Insights
Using *GPT* in Langflow, we generated insights such as:
- "🎢 Carousel posts have 20% higher engagement than static posts."
- "🎥 Reels receive twice as many comments as other types of posts."

## 🔢 How It Works

### 🔀 Steps in LangFlow Workflow:
1. *Take Input*: Accepts the post type.
2. *Retrieve Data*: Pulls engagement metrics from Astra DB.
3. *Extract User Info*: Identifies specific user data from input.
4. *Filter Data*: Filters based on user data.
5. *Calculate Averages*: Computes engagement averages.
6. *Send to Model*: Passes this data to GPT.
7. *Generate Output*: GPT creates meaningful insights.

### 📊 Data Management in Astra DB

Our database schema includes:
- 👤 *user_id*: A unique ID for each user.
- 🔖 *post_type*: Type of post (reel, carousel, static image).
- ❤ *likes, 💬 **comments, 💪 **shares*: Metrics to track engagement.

## 🔄 Features
- ⏳ *Real-Time Analysis*: Quickly assess social media performance.
- 🔄 *Custom Insights*: Personalized insights powered by GPT.
- 📊 *Scalable Storage*: Reliable and efficient database.
- 🌐 *Workflow Automation*: Smooth data flow with LangFlow.

## 🎧 How to Run the Project Locally

### ⚡ Requirements
- Install *Node.js* on your computer.
- Have access to *DataStax Astra DB*.

### 🔄 Steps to Run

1. *Clone the Repository:*
   bash
   git clone https://github.com/Rohit-1301/SocialIQ.git
   cd SocialIQ
   

2. *Install Dependencies:*
   bash
   cd client/
   npm install
   cd ../server/
   npm install
   

3. *Set Environment Variables:*
   Create a .env file and add the following:
   env
   LANGFLOW_APPLICATION_TOKEN=<your_token>
   PORT=5000
   ASTRA_TOKEN=<your_astra_token>
   ASTRA_URL=<your_astra_url>
   

4. *Run the Application:*
   bash
    cd SocialIQ
    npm run dev
   
   

## 🚀 Deployment
Check out the live app here: *SocialIQ  a social media analyzer chatbot*

## 📚 Submitting Your Project

### 🔗 Project Submission:
- Upload your project to *FindCoder*.
- Connect it with the *Level Supermind Hackathon*.

### 🎥 Demo Video:
Record a video explaining:
- The Langflow workflow
- How DataStax is used for storing and querying data
- Examples of insights generated with GPT
- Share the video link (YouTube, public access).

### 🔐 Repository Link:
Provide a public GitHub link or a downloadable ZIP file with the complete code.

## 📊 Tech Stack
- *Frontend*: 🔧 React, Tailwind CSS
- *Backend*: 🔧 Express, TypeScript
- *Database*: 📀 Astra DB
- *Workflow Automation*: 🔄 Langflow



Let’s build something amazing together! 
