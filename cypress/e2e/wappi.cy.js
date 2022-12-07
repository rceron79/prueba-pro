import { profilePage } from "./pages/profilePage.cy.js";
import { loginPage } from "./pages/loginPage.cy.js";
import { homePage } from "./pages/homePage.cy";
import { faker } from '@faker-js/faker';

var name = faker.name.firstName();
var lastname = faker.name.middleName();
var userName = name + lastname;
var passWord = faker.internet.password(8);

const login = new loginPage();
const home = new homePage ();
const profile = new profilePage();


describe('Testing Wappi', () => {
    it('Actualizar perfil usuario', () => {
        login.landing();
        login.setUserCredentials(userName,passWord);
        home.clkProfile();
        profile.uploadUserImage();
        profile.setFullUserInfo(name,lastname);
    });

    it ('Realizar un pedido con un artículo sin cupón',() =>{
        login.landing();
        login.setUserCredentials(userName,passWord);
        home.clkFirstItem();
        home.clkConfirmASingleOrder();
        home.clkConfirmMyOrders();
    })

    it ('Pedido con dos artículos con un cupón',() =>{
        login.landing();
        login.setUserCredentials(userName,passWord);
        home.clkObtainAndApplyCoupon();
        home.clkConfirmMyOrders();
    })

});