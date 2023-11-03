import React from 'react';
import { Link } from 'react-router-dom';

function Places() {
  return (
    <>
    <div className="container" style={{ marginTop: '2%' }}>
    <div className='font-fw-medium' style={{ fontWeight: 'bolder' }}>
      <h1>MANGALORE</h1>
    </div>
    </div>
      <div className="container" style={{ marginTop: '5%' }}>
        <div className="row">
          <h2 className="font-fw-medium" style={{ fontWeight: 'bolder' }}>Places to visit</h2>
          <p className="font-fw-medium">Embark on a remarkable journey as you explore the wealth of captivating destinations in and around the magnificent town of Gokarna. From pristine beaches to lush hills, historic temples, and cultural treasures, there's a world of adventure awaiting your discovery.</p>
          <br></br>
          <br></br>
        </div>
        <h3 className="font-fw-medium mt-4" style={{ fontWeight: 'bolder' }}>Beaches</h3>
        <p className="font-fw-medium">Mangalore is blessed with a collection of stunning beaches that beckon every kind of traveler. Whether you seek solitude, water sports, or the thrill of beachside bonfires, there's a beach to fulfill your desires.</p>
        <div className="row pt-0">
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://www.holidify.com/images/cmsuploads/compressed/kite-festival-panambur-beach-mangalore_20200424135343.jpg" className="card-img-top" alt="..."  style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Panambur Beach</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">Panambur Beach is located at a distance of 13 km from Mangalore to the south of Mangalore port. Every year it is visited by hordes of tourists and locals as it hosts several events like boat racing, kite festival and sand sculptures competitions.</p>
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://www.holidify.com/images/cmsuploads/compressed/800px-Tannirbhavi_Beach_in_Mangalore_-_7_20200605144314.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Tannirbhavi Beach</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">Tannirbhavi Beach is one of the popular beaches in the city. The coastline with golden sand and cool, fresh air is rejuvenating, and people are drawn to the natural beauty of the location the beach has frequently visited attraction. </p>
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://adventurebuddha.com/wp-content/uploads/2020/07/Ullal-Beach-Mangalore-1024x530.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Ullal Beach</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">Ullal beach is a prime tourist attraction in the city. Located in Ullal, a small fishing village only 12 kms away from the city centre of the bustling city of Mangalore, Ullal beach mesmerises its visitors with a panoramic view of a long coastline and the majestic Arabian Sea. </p>
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://www.holidify.com/images/cmsuploads/compressed/surathkal-beach_20200605143403.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Surathkal Beach</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">The Surathkal beach lies further down the Konkan Coast, south of the tourist trap of Goa, about 13 km from the port city of Mangalore, home to one of the major ports of India.Unlike Goa, the beaches in Mangalore have not been overly exposed to tourism. </p>
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://www.holidify.com/images/cmsuploads/compressed/Someshwara-Beach_20200605162022.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Someshwar Beach</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">Located in Ullal in the city of Mangalore, Someshwara Beach is a quaint hidden gem of the city. Boasting of shimmering golden sands, a long and beautiful coastline, the beach is also peppered with rock boulders called Rudra Shile</p>
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://mangaloretourism.in/images//tourist-places/sasihithlu-beach-mangalore/sasihithlu-beach-mangalore-india-tourism-photo-gallery.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Sasihithlu Beach</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">At a distance of 25 kms from Mangalore, in the village of Sasihithlu, Sasihithlu Beach is a gorgeous beach in the state of Karnataka. The beach is the convergence point of the confluence of rivers Nandini and Shambhavi with the Arabian Sea.</p>
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          
        </div>
        <h5 className="font-fw-medium p-2 mt-3" style={{ fontWeight: 'bolder' }}>Must-do</h5>
        <p className="font-fw-medium p-2 mt-3">Manglore is famous for its exhilarating five-beach trek, which takes you on a journey through some of the most stunning coastal landscapes in the region. The trail encompasses the renowned Kudle Beach, the distinctive 'Om Beach,' the tranquil Half Moon Beach, the pristine Paradise Beach, and culminates at the serene Nirvana Beach. This trek offers a perfect blend of adventure and natural beauty, making it a must-do for anyone visiting Gokarna. </p>
      </div>

      
      <div className="container" style={{ marginTop: '5%' }}>
        <div className="row">
      
<h3 className="font-fw-medium mt-4" style={{ fontWeight: 'bolder' }}>Temples</h3>
<p className="font-fw-medium">Mangalore, officially known as Mangaluru, is a coastal city located in the South Indian state of Karnataka. It is a place with a rich cultural and religious heritage and is home to various temples representing different deities and architectural styles.  </p>
<div className="row pt-0">
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://www.holidify.com/images/cmsuploads/compressed/1024px-Kadri_temple_20200605125006.JPG" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">Kadri Manjunath Temple</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">Built in 1068 AD, this temple has the typical Hindu architectural style on the basic Vijaynagri style. It is situated at the base of the Kadri hills, the chief deity being Manjunatha. The temple has many caves around it as it is located on hillocks.</p>
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://mangaloretourism.in/images/places-to-visit/header/shree-durgaparameshwari-temple-kateel-mangalore-tourism-entry-fee-timings-holidays-reviews-header.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">Kateel Durgaparameshwari Temple</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">Kateel Shri Durgaparameshwari Temple is one of the holiest temples in the region. The dominant feature of the temple that attracts people in large numbers is that it is situated on an islet in the middle of River Nandini amidst the serene natural landscape.</p>
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://mangaloretourism.in/images/places-to-visit/header/polali-rajarajeshwari-temple-mangalore-tourism-entry-fee-timings-holidays-reviews-header.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">Polali Rajarajeshwari Temple</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">Polali Rajarajeshwari Temple is an 8th-century temple dedicated to Shri Rajarajeshwari. The most important feature that draws visitors is the idol of Sri Rajarajeshwari which is made of a type of clay that has medicinal properties.</p>
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  
</div>
<h5 className="font-fw-medium p-2 mt-3" style={{ fontWeight: 'bolder' }}>Must-do</h5>
<p className="font-fw-medium p-2 mt-3">Manglore, with its historical and architectural significance, is known for its ancient temples that are an integral part of its cultural heritage. When visiting the temples in Manglore. </p>

        </div>
      </div>
      <div className="container" style={{ marginTop: '5%' }}>
        <div className="row">
      
<h3 className="font-fw-medium mt-4" style={{ fontWeight: 'bolder' }}>Few Other Places</h3>
<p className="font-fw-medium">Visiting places can be a rewarding and enriching experience. It allows you to connect with the past, appreciate different cultures, and gain a deeper understanding of the world's heritage. Approach your visit with respect and curiosity, and you'll create lasting memories while preserving the integrity of these important sites.</p>
<div className="row pt-0">
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://www.holidify.com/images/cmsuploads/compressed/20180430_20200605135736.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">New Mangalore Port</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">The New Mangalore Port situated in Panambur, Mangalore in the state of Karnataka is run and governed new Mangalore trust. It is one of the most major ports located in Karnataka and is the seventh largest port in the country.</p>
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://www.holidify.com/images/cmsuploads/compressed/srimanthi-bai-memorial-government-museum-bejai-museum-mangalore-india-tourism-photo-gallery_20200605123549.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">Bejai Museum</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">The Srimanthi Bai Government Museum or the Bejai Museum is located in the heart of the city and is also Mangalore's only museum. It has a collection of ancient coins, paintings, statues and inscriptions which display the rich heritage of India. </p>
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://www.holidify.com/images/cmsuploads/compressed/06_20181019164503_20181019164519.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">Rosario Cathedral</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">Rosario Cathedral is a 16th-century Roman Catholic church, also called Church of Our Lady of Rosary of Mangalore. It is a magnificent structure with a beautiful interior and one of the few places in Mangalore where one can find peace and tranquillity away from the chaotic city life.   </p>
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  
</div>
<h5 className="font-fw-medium p-2 mt-3" style={{ fontWeight: 'bolder' }}>Must-do</h5>
<p className="font-fw-medium p-2 mt-3">Manglore is a popular tourist destination in India known for its beautiful temples,rivers, serene landscapes, and cultural significance it's a place that offers both relaxation and peace, making it a wonderful destination for a variety of travelers. Enjoy your trip!</p>

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