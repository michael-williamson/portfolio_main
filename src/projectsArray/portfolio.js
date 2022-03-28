let projects = [
  {
    title: "Human Family Tree",
    tech: ["React.js", "Material UI", "Google Maps API"],
    description:
      "Google Maps API integrated with a dynamic data set,  Meant to give any person interested in Human history a resource rich tool at their finger tips",
    site: "https://humanfamilytree.netlify.app/",
    code: "https://github.com/michael-williamson/human_family_tree",
    image: "/media/humanfamilytree.png",
  },
  {
    title: "Origins of Civilization",
    tech: ["React.js", "Material UI", "Google Maps API"],
    description:
      "Google Maps API that introduces the user to the Origins of Civilization. Contains a rich glossary, intriguing images, and interactive displays.  This experience captures the progression of human history after the first crops were sown",
    site: "https://civilization-tracker.netlify.app/",
    code: "https://github.com/michael-williamson/Civilization_Tracker",
    image: "/media/civilization_tracker.png",
  },

  {
    title: "Binary Calculator Mobile",
    tech: ["React Native", "Binary Number System"],
    description:
      "Simplified Calculator that adds two Binary Numbers together and automatically updates with interaction. Created with React Native by applying all the tricks and usability associated with JavaScript code and syntax before conversion to Android Software",
    site: "https://play.google.com/store",
    code: "https://github.com/michael-williamson/binary_calculator_native",
    image: "/media/binary_calculator_native.png",
  },
  {
    title: "Binary Calculator Desktop",
    tech: ["React.js", "Material UI"],
    description:
      "Calculator demonstration using the binary system and circuit board architecture which helps visualize what is happening on a fundamental level in computer system operation",
    site: "https://binarycalculatorapp.netlify.app/",
    code: "https://github.com/michael-williamson/binary_calculator",
    image: "/media/binary_calculator_desktop.png",
  },
  {
    title: "Livewell Fishing App",
    tech: ["React.js", "TypeScript", "Java Spring Boot"],
    description:
      "Full Stack App for fishing enthusiasts to keep track of the fish they catch.  Designed using React.js with TypeScript in the Frontend.  Graphics were made utilizing Adobe Creative Cloud.  Backend API was designed with Java Spring and PostgreSQL",
    site: "https://livewell-app.netlify.app/",
    code: "https://github.com/michael-williamson/livewell_app_ts",
    image: "/media/livewell_app.png",
  },
  {
    title: "Stock Trading App",
    tech: ["React.js", "TypeScript", "Java Spring Boot"],
    description:
      "Full Stack App designed to assist Stock Traders in analyzing and keeping up-to-date with their stock trades.  React.js and TypeScript were used to design the Frontend along with other React.js friendly libraries.  Backend API uses Java Spring and Authentication to communicate with the User Interface",
    site: "https://trade-buddy.netlify.app/",
    code: "https://github.com/michael-williamson/trade_buddy_ts",
    image: "/media/trade_buddy.png",
  },
  {
    title: "Family Tree",
    tech: ["React.js", "Redux Form", "Redux"],
    description:
      "Form app that displays family members in a family tree form.  A React.js application that relied heavily on Redux Form.  Family Tree App does an excellent job of maintaining Form data and displaying it in a User Friendly model",
    site: "https://family-tree-app.netlify.app/",
    code: "https://github.com/michael-williamson/FAMILY_TREE",
    image: "/media/family_tree.jpg",
  },
  {
    title: "Archery Speed",
    tech: ["React.js", "Material UI", "CSS Animations"],
    description:
      "Tool for allowing archers to visualize arrow speed and target distance,  build using latest React.js techniques",
    site: "https://archeryspeed.netlify.app/",
    code: "https://github.com/michael-williamson/archery_timer",
    image: "/media/archery.png",
  },
  {
    title: "Brewpub Site",
    tech: ["CSS animations", "Responsive", "Optimization"],
    description:
      "An experimental design for what a brewpub website would like with promotions, list of what's on tap, and what events are coming soon.  Complete with CSS Animations smooth-scrolling and Web Optimized Media",
    site: "https://michael-williamson.github.io/frontier-brew-pub/",
    code: "https://github.com/michael-williamson/frontier-brew-pub",
    image: "/media/brewpub-app.jpg",
  },
  {
    title: "Yoga Site",
    tech: ["HTML Tables", "Animations", "Color Theme"],
    description:
      "Experimental site based on bringing to life the website of a potential yoga business client. Covers all of the necessities of information such as instructor info, class times, and class descriptions.  As well incorporated CSS transforms and transitions for interactivity",
    site: "https://michael-williamson.github.io/yoga-site/",
    code: "https://github.com/michael-williamson/yoga-site",
    image: "/media/yoga-app.jpg",
  },
  {
    title: "Planet App",
    tech: ["JavaScript Equations", "Adobe Photoshop", "Info Site"],
    description:
      "Interactive and fun app using graphics and movement to create a pleasant experience learning about the planets in our Solar System.  Used Animations with CSS to get a circular rotation",
    site: "https://michael-williamson.github.io/the-planets/",
    code: "https://github.com/michael-williamson/the-planets",
    image: "../../media/planets.jpg",
  },
  // {
  //     "title": "Wordpress Custom Theme",
  //     "tech": ["PHP","MySql","Bootstrap 4"],
  //     "description":"Built this theme using the up-to-date Wordpress API along with PHP 7.  Also I incorporated Bootstrap 4 for speedy yet sleek design.",
  //     "site":"http://www.wpflippertheme.com",
  //     "code":"https://github.com/michael-williamson/wordpress_freedive_theme",
  //     "image":"/images/wpflippertheme.jpg"
  // },
  // {
  //     "title": "Song Writer app",
  //     "tech": ["GraphQL","React.js","Node/Express.js"],
  //     "description":"This is an app based off of GraphQL and its function in the React stack. Add simple songs and list of lyrics using a user friendly interface. Along with editing and deleting capability.",
  //     "site":"https://infinite-waters-84117.herokuapp.com/#/",
  //     "code":"https://github.com/michael-williamson/song-writer-app",
  //     "image":"/images/song-list-app.jpg"
  // },
  // {
  //     "title": "Quiz App",
  //     "tech": ["JS Programming","HTML tables","Testing"],
  //     "description":"Testing app used to quiz the test taker on various subjects. Relies upon JavaScript and Jquery programming to determine if input is correct and gives a graded score based on accuracy.",
  //     "site":"https://michael-williamson.github.io/quiz.github.io/",
  //     "code":"https://github.com/michael-williamson/quiz.github.io",
  //     "image":"/images/quiz.jpg"
  // },
  // {
  //     "title": "Freedive Site",
  //     "tech": ["Info Site","Navigation","Choice Imagery"],
  //     "description":"This informational freedive site is completely from React.js as a javascript framework. Allows the visitor some insight for the past time of freediving.",
  //     "site":"https://michael-williamson.github.io/freedive/",
  //     "code":"https://github.com/michael-williamson/freedive",
  //     "image":"/images/free-dive-app.jpg"
  // },
  // {
  //     "title": "Lightbox Gallery",
  //     "tech": ["Photo Gallery","JQuery","Typography"],
  //     "description":"This is a Lightbox Gallery design I've created using the Jquery library mostly. It features a row and column gallery of images that are selectable on the main page. Once an image has been selected, a full page overlay is appended by Jquery code. The overlay presents a single image along with description text that were all pulled from the HTML tree using Jquery. The user can then naviate through the images using click and keyboard events.",
  //     "site":"https://michael-williamson.github.io/lightboxgallery.github.io/",
  //     "code":"https://github.com/michael-williamson/lightboxgallery.github.io",
  //     "image":"/images/lightbox.jpg"
  // },
  // {
  //     "title": "Form Design",
  //     "tech": ["HTML Forms","Inputs","Cool Design"],
  //     "description":"This site features a HTML form design that captures all the necessary information from a site visitor and allows it to be submitted. Various comprehensions of HTML form markup were used to provide data input fields, selectable option lists, radio buttons, and checkboxes also accompanied by a submit button.",
  //     "site":"https://michael-williamson.github.io/form.github.io/",
  //     "code":"https://github.com/michael-williamson/form.github.io",
  //     "image":"/images/form-ps.jpg"
  // },
  // {
  //     "title": "Corgi SVG",
  //     "tech": ["SVG Integration","Responsive","Color Themes"],
  //     "description":"With this project I really delved into what SVG's are along with the many advantages of using them on a site. In many places I added animations to the SVG's using CSS3 transitions and transformations. I reduced the file size of the site by substituting images with SVG's. As well, the site has a responsive design which was easier with SVG's because of their ability to scale with window size.",
  //     "site":"https://michael-williamson.github.io/svg-site/",
  //     "code":"https://github.com/michael-williamson/svg-site",
  //     "image":"/images/corgi.jpg"
  // }
];

export default projects;
