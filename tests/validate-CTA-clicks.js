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
