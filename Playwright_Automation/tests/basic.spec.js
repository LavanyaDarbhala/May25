import { test,expect } from '@playwright/test'
import { equal } from 'assert';
/*test('testCase1',async({page})=>{
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
await expect(page).toHaveTitle('Practice Page');
await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/');
//To print the URL
const pageURL =  page.url();
console.log("page URL is",pageURL);
//To print the title
const title = await page.title();
console.log(title);
page.close();
});*/


/*test('testCase2',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const pageURL =  page.url();
    console.log("page URL is",pageURL);
    const pageTitle = await page.title();
    console.log("page title is",pageTitle);
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await page.fill("//input[@id='username']","rahulshettyacademy");
    await page.fill("//input[@id='password']","learning");
    await page.click("//input[@id='signInBtn']")
    page.close();


})*/


test('testcase3',async({page})=>{
await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
const pageTitle = await page.title();
console.log("page title is",pageTitle);

var links = page.locator("//div[@class='products-wrapper']//div[@class='product']//h4");
const molinks = await links.count();
console.log("product Count is: ", molinks);
 
//const linkpage = await page.$$("//div[@class='products-wrapper']//div[@class='product']//h4");

/*for ( const displaylinks of linkpage)
{
    const products = await displaylinks.textContent();
    console.log("product names are: ",products);
    if(await displaylinks.textContent() == 'Apple - 1 Kg')
    {
        console.log("product is APPLE");
      // await page.locator("//div[@class='products-wrapper']//div[@class='product'][""]//a[@class='increment']").click();
        

    }
}
*/


for ( let i=1; i<=molinks; i++)
{

  const productlinks = page.locator("//div[@class='products-wrapper']//div[@class='product']["+i+"]//h4");
  console.log("product names are: ", productlinks);


    const products = await productlinks.textContent();
    console.log("product names are: ", products);
   if(products == 'Apple - 1 Kg')
    {
        console.log("This is an APPLE");
        
        console.log(page.locator("//div[@class='products-wrapper']//div[@class='product']["+i+"]//div[@class='stepper-input']//a[@class='increment']"));
        await page.locator("//div[@class='products-wrapper']//div[@class='product']["+i+"]//div[@class='stepper-input']//a[@class='increment']").click();

         //const itemQuantity = page.locator("//div[@class='products-wrapper']//div[@class='product']["+i+"]//div[@class='stepper-input']//input[@type='number']");
         //const quantity = await itemQuantity.textContent();
         //console.log("NUMBER OF KGS OF APPLE ADDED TO CART: ", quantity);
         await page.locator("//div[@class='products-wrapper']//div[@class='product']["+i+"]//div[@class='product-action']//button[@type='button']").click();
        

    }



    
}



//page.close();


})







