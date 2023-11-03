import React from 'react';
import { Link } from 'react-router-dom';

function Places() {
  return (
    <>
     <div className="container" style={{ marginTop: '2%' }}>
    <div className='font-fw-medium' style={{ fontWeight: 'bolder' }}>
      <h1>BANGALORE</h1>
    </div>
    </div>
      <div className="container" style={{ marginTop: '5%' }}>
        <div className="row">
          <h2 className="font-fw-medium" style={{ fontWeight: 'bolder' }}>Places to visit</h2>
          <p className="font-fw-medium">Embark on a remarkable journey as you explore the wealth of captivating destinations in and around the magnificent town of Gokarna. From pristine beaches to lush hills, historic temples, and cultural treasures, there's a world of adventure awaiting your discovery.</p>
          <br></br>
          <br></br>
        </div>
        <h3 className="font-fw-medium mt-4" style={{ fontWeight: 'bolder' }}>Top sights</h3>
        <p className="font-fw-medium">Bangalore, now officially known as Bengaluru, is a vibrant and bustling city in the southern part of India. It is known for its pleasant climate, diverse culture, and a mix of modern and traditional attractions.</p>
        <div className="row pt-0">
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://www.holidify.com/images/cmsuploads/compressed/C1_20170905112652.PNG" className="card-img-top" alt="..."  style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Cubbon Park</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">Spread over an area of 300 acres, Cubbon Park in the city of Bangalore is a major sightseeing attraction rich in green foliage. It is a green belt region of the city and is an ideal place for nature lovers and those seeking a calm atmosphere.</p>
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://lh3.googleusercontent.com/p/AF1QipNpT3t7Lx61s4C1BH4pWlw1-oe9-_95pvwe4wjb=s1360-w1360-h1020" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Lalbagh Botanical Garden</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">Lalbagh is one of Bengaluru’s major attractions. A sprawling garden situated in a 240 acres piece of land in the heart of the city, Lalbagh houses India’s largest collection of tropical plants, including trees that are several centuries old. </p>
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/98000/98128-Bangalore-Palace.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Bangalore Palace</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">An epitome of great architecture and beauty, The Majestic Bangalore Palace preserves in it the spice of old regal opulence. Currently the central attraction in Bangalore, the palace was built in the year 1878.to help the people having language issues.</p>
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Vidhana_Soudha_as_of_8_June_2022.jpg/488px-Vidhana_Soudha_as_of_8_June_2022.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Vidhana Soudha</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">The two houses of legislature of the princely state of Mysore, the legislative assembly and the legislative council, were established in 1881 and 1907 respectively. Sessions of the two houses took place in Mysore until India's independence from British rule on 15 August 1947, when Mysore acceded to India. </p>
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Lurking_tiger.jpg/426px-Lurking_tiger.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Bannerghatta National Park</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">Bannerghatta National Park is a national park in India, located near Bangalore, Karnataka. It was founded in 1970 and declared as a national park in 1974.In 2002, a small portion of the park became a zoological garden, the Bannerghatta Biological Park.</p><br />
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/St.Mary%27s_Basilica.jpg/390px-St.Mary%27s_Basilica.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">St. Mary's Basilica</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">St. Mary's Basilica is located in the Archdiocese of Bangalore in the Indian state of Karnataka. It is among the oldest churches in Bangalore and the first church in the state that has been elevated to the status of a minor basilica.</p><br />
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://hal-india.co.in/Common/Uploads/ContentTemplate/21_ParaS_IMG1.JPG" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Heritage Centre and Aerospace Museum</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">Hindustan Aeronautics Limited (HAL) Heritage Centre & Aerospace Museum, Bangalore, the first of its kind in India established in 2001, is situated at the intersection of HAL Old Airport Road & Basavanagar Road. It is about 17 Kms from the Bengaluru City Railway Station. 
</p>
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://www.holidify.com/images/cmsuploads/compressed/jawaharlal-nehru-planetarium-bangalore-1_20180120231452.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Jawaharlal Nehru Planetarium</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">Jawaharlal Nehru Planetarium in Bangalore is a popular attraction in the city that is administered by the Bangalore Association for Science Education. The entire establishment is meant for science enthusiasts with an aim to impart knowledge of the aspects of earth and space in a fun and exciting way.</p><br />
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card1 mt-5" style={{}}>
              <img src="https://www.vismuseum.gov.in/wp-content/uploads/2020/08/vitm.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
              <h4 className="font-fw-medium pt-3 p-2">Visvesvaraya Industrial and Technological Museum</h4>
              <div className="card-body">
                <p className="card-text font-fw-medium">The Visvesvaraya Industrial and Technological Museum, Bangalore, India, a constituent unit of the National Council of Science Museums, Ministry of Culture, Government of India, was established in memory of Sir M. Visvesvaraya. 
</p><br />
                <button type="button" className="btn btn-dark">More</button>
              </div>
            </div>
          </div>
        </div>
        <h5 className="font-fw-medium p-2 mt-3" style={{ fontWeight: 'bolder' }}>Must-do</h5>
        <p className="font-fw-medium p-2 mt-3">The top sights and attractions in Bangalore that offer a mix of history, culture, and natural beauty. Make sure to check their opening hours and any COVID-19 related guidelines before planning your visit.</p>
      </div>

      
      <div className="container" style={{ marginTop: '5%' }}>
        <div className="row">
      
<h3 className="font-fw-medium mt-4" style={{ fontWeight: 'bolder' }}>Temples</h3>
<p className="font-fw-medium">Bangalore, also known as Bengaluru, is home to several temples that reflect the city's rich cultural and spiritual heritage these are just a few of the many temples you can visit in Bangalore The city offers a diverse range of spiritual experiences, from ancient, traditional temples to modern, well-maintained ones. Please be respectful of local customs and traditions when visiting these sacred places..</p>
<div className="row pt-0">
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/a9/43/da.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">ISKCON Temple</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">Sri Radha Krishna-Chandra Temple is one of the largest Krishna-Hindu temples in the world. It is situated in Bangalore in the Indian state of Karnataka. The temple is dedicated to Hindu deities Radha Krishna and propagates monotheism as mentioned in Chandogya Upanishad.</p>
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://i0.wp.com/www.rvatemples.com/wp-content/uploads/2018/03/gavi5-28-1493362188.jpg?fit=600%2C450&ssl=1" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">Gavi Gangadhareshwara Temple</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">Gavi Gangadhareshwara Temple, or Sri Gangaadhareshwara, also Gavipura Cave Temple, an example of Indian rock-cut architecture, is located in Bengaluru in the state of Karnataka in India. It was built in the 16th century by Kempe Gowda I, the founder of the city.</p>
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://1.bp.blogspot.com/-10OkPwcyePA/XiRA64iPVkI/AAAAAAAAGmQ/Zqoner85J4cx9YQruMHiVUU2Bb_mIOj0gCEwYBhgL/s1600/DSCN0125.JPG" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">Halasuru Someshwara Temple</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">Halasuru Someshwara Temple is located in the neighborhood of Halasuru in Bangalore, Karnataka, India. It is one of the old temples in the city dating back to the Chola period, it is dedicated to the Hindu god Shiva.These Mudaliars, originally Tulu speaking, had settled in parts of TN especially Arcot.</p>
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  
</div>
<h5 className="font-fw-medium p-2 mt-3" style={{ fontWeight: 'bolder' }}>Must-do</h5>
<p className="font-fw-medium p-2 mt-3">Bangalore, also known as Bengaluru, is home to several beautiful and historically significant temples he temple timings and any specific rules or dress codes before visiting. Also, be respectful and mindful of the customs and traditions when visiting these temples.
 </p>

        </div>
      </div>
      <div className="container" style={{ marginTop: '5%' }}>
        <div className="row">
      
<h3 className="font-fw-medium mt-4" style={{ fontWeight: 'bolder' }}>Hills</h3>
<p className="font-fw-medium"> </p>
<div className="row pt-0">
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/05/Cover2.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2"> Nandi Hills</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">A perfect location to be one with nature, the hills are located 60kms away from the city, which makes it an ideal destination if you are preparing a list of places to visit in Bangalore within 100 kms. One the most popular viewpoint in Bangalore, Nandi Hills is one among the renowned places to visit in Bangalore for couples. </p>
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://lh3.googleusercontent.com/p/AF1QipPJSVtUUXRK8IfzLeFJ8WlT0TJfEzV7SInvcs6M=s1360-w1360-h1020" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">Hanumagiri hills</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">Shri Hanumagiri Kshethra is situated atop a hill in the middle of Bangalore, India. It hosts an ancient Hanuman temple from which the hillock derives the name ‘Hanumagiri’. The hill hosts three temples, Shri Arkeshwara Temple, Shri Ganapathi Temple and Shri Anjaneya Temple.this is also called as sangivini hill</p>
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card card1 mt-5" style={{}}>
      <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2019/08/%E0%A4%B8%E0%A4%AE%E0%A4%B0-%E0%A4%B9%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B81.jpg" className="card-img-top" alt="..." style={{ width: '100%', height: '300px' }}></img>
      <h4 className="font-fw-medium pt-3 p-2">Bannerghatta hills</h4>
      <div className="card-body">
        <p className="card-text font-fw-medium">Bannerghatta is a popular location in the southern part of Bangalore, India. The area is known for its scenic beauty and natural attractions, including Bannerghatta Biological Park and Bannerghatta National Park. While it's not specifically a "hill," the region is hilly and is part of the Eastern Ghats</p>
        <button type="button" className="btn btn-dark">More</button>
      </div>
    </div>
  </div>
  
</div>
<h5 className="font-fw-medium p-2 mt-3" style={{ fontWeight: 'bolder' }}>Must-do</h5>
<p className="font-fw-medium p-2 mt-3">Banglore is a popular tourist destination in India known for its beautiful beaches, serene landscapes, and cultural significance it's a place that offers both relaxation and adventure, making it a wonderful destination for a variety of travelers. Enjoy your trip!</p>

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