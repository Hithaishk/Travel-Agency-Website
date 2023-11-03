import React from 'react';
import { Link } from 'react-router-dom';

function Places() {
  return (
    <>
    <div className="container" style={{ marginTop: '2%' }}>
    <div className='font-fw-medium' style={{ fontWeight: 'bolder' }}>
      <h1>MYSORE</h1>
    </div>
    </div>
      <div className="container" style={{ marginTop: '5%' }}>
        <div className="row">
          <h2 className="font-fw-medium" style={{ fontWeight: 'bolder' }}>Places to visit</h2>
          <p className="font-fw-medium">Embark on a remarkable journey as you explore the wealth of captivating destinations in and around the magnificent town of Gokarna. From pristine lush hills, historic temples, and cultural treasures, there's a world of adventure awaiting your discovery.</p>
          <br></br>
          <br></br>
        </div>
        <h3 className="font-fw-medium mt-4" style={{ fontWeight: 'bolder' }}>Temples</h3>
        <p className="font-fw-medium">Mysore officially Mysuru, is a metropolitan city in the southern Indian state of Karnataka. It is the third-most populous and third-largest city in the state, and is one of the cleanest cities in India. It is the seat of the Wadiyar dynasty and was the capital of the Kingdom of Mysore for almost six centuries, from 1399 until 1947. It is currently the headquarters of Mysore district and Mysore division. Known for its heritage structures and palaces, including the famous Mysore Palace, and noted for its culture, Mysore is popularly known as the "City of Palaces", the "Heritage City",and the "Cultural Capital of Karnataka".</p>
        <div className="row pt-0">
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Chamundeshwari_Temple.jpg" className="card-img-top" alt="..."  style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Chamundeshwari Temple</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">The Chamundeshwari Temple is located on the top of Chamundi Hills about 13 km from the city of Mysuru. The temple was named after Chamundeshwari ,the fierce form of Shakti, a tutelary deity held in reverence for centuries by the Maharaja of Mysuru.</p>
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Somanathapura_Keshava_Temple.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Chennakesava Temple</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">The Chennakesava Temple, also referred to as Keshava Temple, is a Vaishnava Hindu temple on the banks of River Kaveri at Somanathapura, Karnataka, India. The temple was consecrated in 1258 CE by Somanatha Dandanayaka.</p>
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/03/Srikanteshwara-temple.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">SriKanteshwara Temple</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">The Nanjundeshwara Temple (also called Srikanteshwara Temple) is an ancient temple dedicated to Shiva in the Hindu pilgrimage town of Nanjanagudu in Karnataka.It is located on the bank of the Kapila River, a tributary of the Kaveri River.</p>
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/03/Bylakuppe-Buddhist-Golden-Temple.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Bylakuppe Buddhist Golden Temple</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">Close to Mysore is the Tibetan-Buddhist settlement known as Bylakuppe, established by the Tibetan community who migrated to India. The settlement was built in the year 1961 and has been home to the Vajrayana Buddhist monks for a long time.</p>
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/03/ISKCON-Temple-2.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">ISKCON</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">ISKCON or The International Society for Krishna’s Consciousness is one of the most celebrated religious sites in India, and one such is also based in Mysore city, dedicated to Lord Krishna and the saintly Radha.  </p><br />
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/03/Talakad-Temples.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Talakad Temples</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">Among the most visited religious sites in Mysore are the ancient Talakad temples. This group of temples dates back to the times of the Ganga and the Woedyar dynasties. It is 45 km from Mysore and can be easily accessed by road transportation.</p>
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/03/Shweta-Varahaswamy-temple.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Shweta Varahaswamy Temple</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">One of the most famous temples visited by tourists is the Shweta Varahaswamy temple which sits near Mysore fort, within the premises of the Mysore Palace.The temple is dedicated to the worship of Lord Varaha, an incarnation of Lord Vishnu. </p>
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/03/Bhuvaneshwari-temple-1.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Bhuvaneshwari Temple</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">This beautiful temple marks its presence at the central focus of a royal area and is dedicated to Lord Rama. The walls of this temple are eager to illustrate the entire Ramayana flow before its visitors.</p><br />
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          
        </div>
        <h5 className="font-fw-medium p-2 mt-3" style={{ fontWeight: 'bolder' }}>Must-do</h5>
        <p className="font-fw-medium p-2 mt-3">Hampi, with its historical and architectural significance, is known for its ancient temples that are an integral part of its cultural heritage. When visiting the temples in Hampi, </p>
      </div>

      
      <div className="container" style={{ marginTop: '5%' }}>
        <div className="row">
      
<h3 className="font-fw-medium mt-4" style={{ fontWeight: 'bolder' }}>Historic Places</h3>
<p className="font-fw-medium">Hampi is a UNESCO World Heritage Site located in the southern state of Karnataka, India. It is renowned for its historical and archaeological significance, as it was once the capital of the powerful Vijayanagara Empire. The ruins of Hampi offer a glimpse into the grandeur of a bygone era. </p>
<div className="row pt-0">
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://cdn.britannica.com/27/242227-050-48358A10/Mysore-Palace-Mysuru-Karnataka-India.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">Mysore Palace</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">Mysore Palace or better known as Amba Vilas Palace is an impressive historic palace located in Karnataka's city, Mysore. It is a top-rated tourist destination in India due to its remarkable architecture that has attracted millions annually throughout the country's history till now.</p>
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://hblimg.mmtcdn.com/content/hubble/img/mysore/mmt/activities/m_activities_Mysore_St%20Philomena_s%20Cathedral_l_437_655.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">St. Philomena's Cathedral</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">Inspired by the Cologne Cathedral in Germany, St. Philomena's Cathedral is one of the largest churches in Asia with stained glass windows and lofty towers.</p><br /><br /><br />
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://hblimg.mmtcdn.com/content/hubble/img/mysore/mmt/activities/m_activities_Mysore_Jagmohan%20Palace_l_400_640.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">Jagmohan Palace</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">Jagmohan Palace, built in a traditional Hindu architectural style, rises up three storeys and dates back to 1861. It was built as an alternate retreat for the royal family.</p><br /><br />
        <button type="button" className="btn btn-dark">More</button><br />
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://cdn.s3waas.gov.in/s30d3180d672e08b4c5312dcdafdf6ef36/uploads/2018/09/2018090185-300x169.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">Lalithamahal Palace</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">The Lalitha Mahal is the second largest palace in Mysuru. It is located near the Chamundi Hills, east of the city of Mysuru in the Indian state of Karnataka..</p><br /><br />
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Brindavan_Gardens.JPG/375px-Brindavan_Gardens.JPG" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">Brindavan Gardens</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">The Brindavan Gardens is a garden located 12 k.ms from the city of Mysore of Karnataka. It lies adjoining the Krishnarajasagara Dam which is built across the river Kaveri.[2] The work on laying out this garden was started in the year 1927 and completed in 1932. </p>
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Sand_museum_Mysore_sculpture.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">Mysore Sand Sculpture Museum</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">Mysore Sand Sculpture Museum is the first sand sculpture museum in India, located in Mysore, Karnataka.[1][2] It was inaugurated in 2014, with 150 sand sculptures on display, on a one-acre land at the base of Chamundi Hills.</p>
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
</div>
<h5 className="font-fw-medium p-2 mt-3" style={{ fontWeight: 'bolder' }}>Must-do</h5>
<p className="font-fw-medium p-2 mt-3">If you're interested in exploring historic places, there are numerous incredible destinations around the world that offer a glimpse into the past.These historic places offer a fascinating journey through time and provide valuable insights into the achievements, cultures, and civilizations of the past. When visiting, be sure to respect local customs, learn about the historical context, and enjoy the unique atmosphere of each site. </p>

        </div>
      </div>
      <div className="container" style={{ marginTop: '5%' }}>
        <div className="row">
      
<h3 className="font-fw-medium mt-4" style={{ fontWeight: 'bolder' }}>Few Other Places</h3>
<p className="font-fw-medium">Visiting places can be a rewarding and enriching experience. It allows you to connect with the past, appreciate different cultures, and gain a deeper understanding of the world's heritage. Approach your visit with respect and curiosity, and you'll create lasting memories while preserving the integrity of these important sites.</p>
<div className="row pt-0">
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/SHI_8879.JPG/1280px-SHI_8879.JPG" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">Mysore Zoo</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">Mysore Zoo (or Mysuru Zoo), officially known as Sri Chamarajendra Zoological Gardens, is a composite of zoological gardens and animal park located in the southern Indian city of Mysore, Karnataka.</p><br />
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Painted_Stork.jpg/800px-Painted_Stork.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">Ranganathittu Bird Sanctuaryk</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">Ranganathittu Bird Sanctuary (also known as Pakshi Kashi of Karnataka), is a bird sanctuary in the Mandya District of Karnataka in India. It is the largest bird sanctuary in the state, 40 acresin area, and comprises six islets on the banks of the Kaveri river. </p>
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Barahachukki.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">Shivanasamudra Falls</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">Shivanasamudra Falls is a cluster of waterfalls on the borders of Malavalli, Mandya and Kollegala, Chamarajanagara, in Karnataka, India, situated along the river Kaveri. The falls form the contour between the districts of Chamarajanagara and Mandya.  </p>
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  
</div>
<h5 className="font-fw-medium p-2 mt-3" style={{ fontWeight: 'bolder' }}>Must-do</h5>
<p className="font-fw-medium p-2 mt-3">Mysore is a popular tourist destination in India known for its beautiful temples,rivers, serene landscapes, and cultural significance it's a place that offers both relaxation and peace, making it a wonderful destination for a variety of travelers. Enjoy your trip!</p>

        </div>
      </div>
      

      <footer className="text-center text-white mb-0" style={{ backgroundColor: 'black' }}>
        <div className="container p-4"></div>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright:
          <Link className="text-white" to="#">Group C5</Link>
        </div>
      </footer>
    </>
  );
}

export default Places;
