
import data from "../data/data";
class Login_Page_locators {


  DisclaimmerModal = "app-disclaimer-modal";
  Disclaimmer = "//h5[@class='ng-tns-c49-2']"; 
  AgreeButton = "//button[normalize-space()='I AGREE']"; 
  LoginNav = "a[title='Login']"

  MobileNumber = "//input[@id='mobile_number' and @placeholder='Enter your mobile number' and @type='tel']"; 
  Password = "//input[@id='password']";
  LoginButton = "//button[@type='submit']";


  UserName_Nav = `//div[contains(@class, 'railway-logged-user')]//span[contains(@class, ${data.username})]`;


  FormInput = "//input[@id='dest_from']";
  ToInput = "//input[@id='dest_to']";
  DateOFJourneyInput = "#doj";
  ChosseClass = "#choose_class"
  SearchButton = "//button[@type='submit']";


  FindAvailableBookNowButton = ":nth-child(2) > .seat-availability-box > .book-now-btn-wrapper > .book-now-btn";
  SeatClass = ".seat-class-name";
  SelectAvailabeOption = "#select-bogie > option";


  SeatAvailable = ".btn-seat.seat-available";
  SeatSelected = ".btn-seat.seat-selected";
  PurchaseButton = "//button[@type='submit']";
  
}
export default Login_Page_locators;