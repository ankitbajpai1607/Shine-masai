import React from 'react'
import Footer from '../Home/Footer';
import SearchBar from '../Home/SearchBar';
import JobList from './JobList'

function JobSearch() {
    const topCities=["Bangalore" ,"Delhi" ,"Hyderabad" ,"Chennai" ,"Mumbai" ,"Kolkata" ,"Pune" ,"Coimbatore" ,"Chandigarh" ,"Lucknow" ,"Jaipur" ,"Ahmedabad" ,"Indore" ,"Gurgaon" ,"Noida" ,"Bhubaneswar"];
    const cities2=["Amalapuram","Anantpur","Chittoor","East Godavari","Guntakal","Guntur","Hyderabad","Kadapa","Kakinada","Kavali","Kurnool","Machilipatnam","Nellore","Ongole","Prakasam","Rajahmundry","Srikakulam","Tadepalligudem","Tirumala","Tirupati","Vijayawada","Vishakhapatnam","Vizianagaram","West Godavari"];
    const cities3=["Anjaw","Changlang","Dibang Valley","East Kameng","East Siang","Itanagar","Kurung Kumey","Lohit","Papum Pare","Tawang","Tirap","West Kameng","West Siang"]
    const cities4=["Baksa","Barpeta","Bongaigaon","Cachar","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Dima Hasao","Goalpara","Golaghat","Guwahati","Hailakandi","Jorhat","Kamrup","Kamrup Metropolitan","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Morigaon","Nagaon","Nalbari","Silchar","Sivasagar","Sonitpur","Tarapur","Tinsukia","Udalguri"]
    const cities5=["Araria","Arwal","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Maharajganj","Munger","Muzaffarpur","Muzzafarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali"]
    const cities6=["Chandigarh","Mohali","Panchkula"]
    const cities7=["Baloda Bazar","Bastar","Bhillai","Bijapur","Bilaspur","Dakshin Bastar Dantewada","Dhamtari","Durg","Janjgir Champa","Kabirdham","Korba","Koriya","Mahasamund","Narayanpur","Raigarh","Raipur","Rajnandgaon","Surguja","Uttar Bastar Kanker"]
    const cities8=["Dadra Nagar Haveli","Silvassa"]
    const cities9=["Delhi","Faridabad","Ghaziabad","Gurgaon","Noida"]
    const cities10=["North Goa","Panaji","South Goa","Vasco da Gama"]
    const cities11=["Ahmedabad","Amreli","Anand","Ankleshwar","Banaskantha","Bharuch","Bhavnagar","Bhuj","Dahod","Dang","Gandhidham","Gandhinagar","Gir","Halol","Jamnagar","Junagadh","Junagarh","Kandla","Mahesana","Mehsana","Mundra","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Surat","Surendranagar","Tapi","Vadodara","Valsad","Vapi"]
    const cities12=["Ambala","Bahadurgarh","Bawal","Bhiwani","Faridabad","Fatehabad","Gurgaon","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kundli","Kurukshetra","Manesar","Nuh","Palwal","Panchkula","Panipat","Rewari","Rohtak","Saha","Sirsa","Sonipat","Yamunanagar"]
    const cities13=["Baddi","Bilaspur","Chamba","Dalhousie","Dharamsala","Kangra","Kullu","Manali","Mandi","Palampur","Shimla","Sirmaur","Solan","Una"]
    const cities14=["Ahmednagar","Ahmednagar","Akola","Ambernath","Amravati","Aurangabad","Baramati","Bhandara","Bhiwandi","Boisar","Chakan","Chandrapur","Dhule","Dombivali","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kalyan","Kharghar","Kolhapur","Latur","Manor","Mira Bhayandar","Mumbai","Nagpur","Nanded","Nandurbar","Nashik","Navi Mumbai","Osmanabad","Palghar","Panvel","Parbhani","Pimpri Chinchwad","Pune","Raigad","Ratnagiri","Sangli","Satara","Shirdi","Sindhudurg","Solapur","Thane","Vasai","Vita","Wardha","Yavatmal"]
    const cities15=["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amroha","Auraiya","Azamgarh","Baghpat","Bahraich","Balrampur","Banda","Barabanki","Bareilly","Basti","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur","Kasganj","Kushinagar","Lalitpur","Lucknow","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Muzzafarnagar","Noida","Orai","Patti","Pilibhit","Raebareli","Rampur","Saharanpur","Sant Kabir Nagar","Sant Ravidas Nagar","Shahjahanpur","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"]
    const cities16=["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haldwani","Haridwar","Kashipur","Lansdowne","Mussoorie","Nainital","Rishikesh","Roorkee","Rudrapur","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"]
    const cities17=["Adra","Asansol","Bally","Bankura","Bardhaman","Birbhum","Burdwan","Dakshin Dinajpur","Darjeeling","Durgapur","Haldia","Haripur","Hooghly","Howrah","Jalpaiguri","Kharagpur","Kolkata","Malda","Murshidabad","Nadia","Nayagarh","Purba Medinipur","Puruliya","Siliguri","Uttar Dinajpur"]


    return (
        <div>
            <SearchBar/>
           
            <div style={{margin:"auto",marginBottom:"120px",marginLeft:"75px",paddingTop:"20px"}}>
            <div style={{float:"right",marginRight:"100px"}}></div>
                <div style={{float:"right",marginRight:"100px"}}><img style={{width:"300px",height:"250px"}} src="https://tpc.googlesyndication.com/simgad/2454703844150116203" alt="img"/> </div>
            <div><img style={{width:"728px",height:"90px"}} src="https://tpc.googlesyndication.com/simgad/1237474675117557188" alt="img"/></div>
                <JobList list={topCities} heading={"Jobs in Top Cities"}/>
                <JobList list={cities2} heading={"Jobs in Andhra Pradesh"}/>
                <JobList list={cities3} heading={"Jobs in ArunachalPradesh"}/>
                <JobList list={cities4} heading={"Jobs in Assam"}/>
                <JobList list={cities5} heading={"Jobs in Bihar"}/>
                <JobList list={cities6} heading={"Jobs in Chandigarh Region"}/>
                <JobList list={cities7} heading={"Jobs in Chattisgarh"}/>
                <JobList list={cities8} heading={"Jobs in Dadar and Nagar Haveli"}/>
                <JobList list={cities9} heading={"Jobs in Delhi-NCR Region"}/>
                <JobList list={cities10} heading={"Jobs in Goa"}/>
                <JobList list={cities11} heading={"Jobs in Gujarat"}/>
                <JobList list={cities12} heading={"Jobs in Haryana"}/>
                <JobList list={cities13} heading={"Jobs in Himachal Pradesh"}/>
                <JobList list={cities14} heading={"Jobs in Mahahrashtra"}/>
                <JobList list={cities15} heading={"Jobs in Uttar Pradesh"}/>
                <JobList list={cities16} heading={"Jobs in UttarKhand"}/>
                <JobList list={cities17} heading={"Jobs in West Bengal"}/>

            </div>
    
           
            
            <Footer/>
        </div>
    )
}

export default JobSearch
