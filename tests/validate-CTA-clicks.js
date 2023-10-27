Feature('Validate CTA buttons works');


// open portfolio page
Scenario('Open the portfolio page',  ({ I }) => {
    I.amOnPage('/');
    I.seeInTitle('Fulya Ertays Portfolio');

});
// clicks links on top menu bar
Scenario('Click links on the top menu bar',  ({ I }) => {
    //click Projects button
    I.amOnPage('/');
    I.waitForElement('#projects-link');
    I.click('//*[@id="projects-link"]');
    I.wait(2)

    //click About button
    I.waitForElement('#about-link');
    I.click('//*[@id="about-link"]');
    I.wait(2)

    //click Contact button
    I.waitForElement('#contact-link');
    I.click('//*[@id="contact-link"]');
    I.wait(2)

    //click Resume button
    I.waitForElement('#resume-link');
    I.click('//*[@id="resume-link"]');
    I.amOnPage('https://www.showwcase.com/fulyaertay');
    I.wait(2)
});


// clicks links on header section
Scenario('Click links on the header section',  ({ I }) => {
    //click Get in Touch button
    I.amOnPage('/');
    I.waitForElement('//*[@id="__next"]/div/main/section[1]/div/div[2]/a');
    I.click('//*[@id="__next"]/div/main/section[1]/div/div[2]/a');
    I.waitForElement('//*[@id="contact"]/div/h3[contains(text(),"Get in Touch")]')
    I.wait(2)
});

// clicks links on main section called as My Portfolio
Scenario('Click links on the My Portfolio section',  ({ I }) => {
    //click Visit Site button for first project
    I.amOnPage('/');
    I.waitForElement('//*[@id="projects"]/div[2]/div/div[2]/div/a[1]/span');
    I.click('//*[@id="projects"]/div[2]/div/div[2]/div/a[1]/span');
    I.amOnPage('https://scrimba-spotify-clone.netlify.app/');
    I.wait(2)

    //click the Github button for first project
    I.executeScript("window.history.back();");
    I.wait(2)
    I.waitForElement('//*[@id="github"]');
    I.click('//*[@id="github"]');
    I.amOnPage('https://github.com/fulyaertay/scrimba-tailwind-projects/tree/master/3-solo-project-spotify-clone');
    I.wait(2)

    //click Github button for second project
    I.executeScript("window.history.back();");
    I.wait(2);
    I.waitForElement('//*[@id="github"]');
    I.click('//*[@id="github"]');
    I.amOnPage('https://github.com/fulyaertay/react-mysql-book-application/tree/main');
    I.wait(2)

     //click Visit Site button for third project
     I.executeScript("window.history.back();");
     I.wait(2);
     I.waitForElement('//*[@id="projects"]/div[2]/div/div[6]/div/a[1]');
     I.click('//*[@id="projects"]/div[2]/div/div[6]/div/a[1]');
     I.amOnPage('https://mini-blog-website.netlify.app/');
     I.wait(2)

    //click Github button for third project
    I.executeScript("window.history.back();");
    I.wait(2);
    I.waitForElement('//*[@id="github"]');
    I.click('//*[@id="github"]');
    I.amOnPage('https://github.com/fulyaertay/mini-blog-app');
    I.wait(2)

     //click Visit Site button for fourth project
     I.executeScript("window.history.back();");
     I.wait(2);
     I.waitForElement('//*[@id="projects"]/div[2]/div/div[8]/div/a[1]');
     I.click('//*[@id="projects"]/div[2]/div/div[8]/div/a[1]');
     I.amOnPage('https://scrimba-quiz-app.netlify.app/');
     I.wait(2)
    
     //click Github button for fourth project
    I.executeScript("window.history.back();");
    I.wait(2);
    I.waitForElement('//*[@id="github"]');
    I.click('//*[@id="github"]');
    I.amOnPage('https://github.com/fulyaertay/react-basics/tree/master/8-quiz-app');
    I.wait(2)

     //click Visit Site button for fifth project
     I.executeScript("window.history.back();");
     I.wait(2);
     I.waitForElement('//*[@id="projects"]/div[2]/div/div[10]/div/a[1]');
     I.click('//*[@id="projects"]/div[2]/div/div[10]/div/a[1]');
     I.amOnPage('https://fe-vans-app.netlify.app/');
     I.wait(2)
    
     //click Github button for fifth project
    I.executeScript("window.history.back();");
    I.wait(2);
    I.waitForElement('//*[@id="github"]');
    I.click('//*[@id="github"]');
    I.amOnPage('https://github.com/fulyaertay/react-router-v6');
    I.wait(2)
    
});

// clicks See My Resume button on About section
Scenario('Click See My Resume button on About section',  ({ I }) => {
    I.amOnPage('/');
    I.waitForElement('//*[@id="see-resume"]');
    I.click('//*[@id="see-resume"]');
    I.amOnPage('https://www.showwcase.com/fulyaertay');
    I.wait(2)
});

// clicks Send Mail button on Get in Touch section
Scenario('Click Send Mail button on Get in Touch section',  ({ I }) => {
    I.amOnPage('/');
    I.waitForElement('//*[@id="send-mail"]');
    I.click('//*[@id="send-mail"]');
    I.wait(2)

});
// clicks links on footer section
Scenario('Click icons on footer section',  ({ I }) => {
    //click Dribble icon
    I.amOnPage('/');
    I.waitForElement('//*[@id="dribble"]');
    I.click('//*[@id="dribble"]');
    I.amOnPage('https://dribbble.com/fulyaertay');


    //click Linkedin icon
    I.executeScript("window.history.back();");
    I.wait(2)
    I.waitForElement('//*[@id="linkedin"]');
    I.click('//*[@id="linkedin"]');
    I.amOnPage('https://www.linkedin.com/in/fulyaertay/');
    I.wait(2)

    //click Github icon
    I.executeScript("window.history.back();");
    I.wait(2)
    I.waitForElement('//*[@id="github"]');
    I.click('//*[@id="github"]');
    I.amOnPage('https://github.com/fulyaertay');
    I.wait(2)

    //click Medium icon
    I.executeScript("window.history.back();");
    I.wait(2)
    I.waitForElement('//*[@id="medium"]');
    I.click('//*[@id="medium"]');
    I.amOnPage('https://medium.com/@fulyaertay');
    I.wait(2)

});