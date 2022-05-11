
export default function About(){
    return(
        <div>
            <h2>React Router Application</h2>
            <br/>
            <p>Create an application in which user can view articles on different topics. The application should have the following links :-</p>
            <ul>
                <li>About</li>
                <li>Articles</li>
                <li>Categories</li>
                <li>Subscribe</li>
            </ul>
            <h4>Description:-</h4>
            <ul>
                <li><b>About:</b> Clicking on this link should render a component which will give a brief description of the application.</li>
                <li><b>Articles:</b> Clicking on this link should render a component which will contain titles of different articles. Clicking on the title should display the entire article.</li>
                <li><b>Categories:</b> This section contains different categories of articles. User can select any one of the categories.</li>
                <li><b>Subscribe:</b> This section contains a single input field and a button. The user will enter the email in the input field.</li>
            </ul>
            <h4>Footer section:-</h4>
            <p>There should be two buttons in the footer section,<b> back and next. </b></p>
            <br/>
            <p>By clicking on back button, previously visited component should be rendered. Next button will be used to go back to the current component.</p>
        </div>
    ) 
}