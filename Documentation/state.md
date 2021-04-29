## Welcome to the final documentation piece for the front-end

So as mentioned in the last file, you may have come across these lines of code

`
import courseData from "./courseData"

    state = {
        currentCourse: courseData.course1,
        courses: Object.entries(courseData)
    }
`

now this code primarily works with React state and that in my opinion is one of the most powerful features of React, so again I highly recommend that you be comfortable with state. 

What is important for me to note is these two lines

`import courseData from "./courseData"`

`state = {
        currentCourse: courseData.course1,
        courses: Object.entries(courseData)
    }`

Now you may have noticed that this app pulls data from /src/courseData.js and we did that for a specific reason. We currently have the front end of this app deployed on Netlify and the API/Backend on Heroku running a postgres database, however, we are going to have to take that down, but we still want this app to have the look and feel of how it was at the time of us being done, so we decided to move the data to a temporary solution so that way it can still somewhat function without the API being deployed. Moving the data to a local file in a JSON format like how it is currently is only a temporary solution and we definitely do not recommend that you keep this app in this state, we very much recommend you deploy the backend of this project to a server somewhere and make calls to that for this projects data.

you can communicate with your API using whatever method you would use but we personally recommend axios. A call to an external API using axios would look like this 

`changeData = async (searchTerm) => {
    const data = await axios.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1");
    this.setState({
      currentCourse: data.course1,
      courses: data
    })
  }`