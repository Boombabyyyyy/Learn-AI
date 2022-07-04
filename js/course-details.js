import coursedata from './data.js';

let params = new URL(document.location).searchParams;
let q = params.get('q');

console.log(q);

// let coursedata = [
//   {
//     coursename: 'Wordpress Hosting',
//     orgprice: '₹150.00',
//     price: 'Free',
//     rating: '4.5',
//     videos: '12 videos',
//     hours: '9 hours',
//     objectives: `In this 2 hours long project-based course, you will learn to create a Beautiful, Professional Medical Business Website from scratch using WordPress with free Hosting and Sub-domain. Our goal is to get free hosting, subdomain, and make use of WordPress to create an amazing medical background website. You&apos;ll learn to work with themes, plugins, permalinks of WordPress.
//     By the end of this project, you will be able to register for a free subdomain and hosting for your website on webhost. You will be able to install WordPress on webhost and you will also be able to create an amazing medical website in WordPress.
//     You do not need any programming skills or experience.
//     Note: This course works best for learners who are based in the North America region. We&rsquo;re currently working on providing the same experience in other regions.`,
//     outline: ` `,
//     authorname: 'Macau Wilium',
//     authorjob: 'UI/UX Designer',
//     authordesc: 'what an amazing author!',
//   },
// ];

document.getElementById('single_course_title').innerHTML = coursedata[q].name;

document.getElementById('orgprice').innerHTML = coursedata[q].orgprice;

document.getElementById('price').innerHTML = coursedata[q].price;
document.getElementById('rating').innerHTML = coursedata[q].rating;
document.getElementById('videos').innerHTML = coursedata[q].videos;
document.getElementById('hours').innerHTML = coursedata[q].hours;
document.getElementById('objectives').innerHTML = coursedata[q].objectives;
document.getElementById('outline').innerHTML = coursedata[q].outline;
document.getElementById('video-thumb').innerHTML = `<img
src="${coursedata[q].imageurl}"
alt=""
/>`;

document.getElementById('accordion').innerHTML = coursedata[q].contents
  .map((d, idx) => {
    return `
    <div class="card">
                         <div class="card-header" id="${idx}wrapper">
                             <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#${idx}" aria-expanded="false" aria-controls="${idx}">
                                     <i class="flaticon-premium"></i> ${d.title}
                                 </button> </h5>
                         </div>
                         <div id="${idx}" class="collapse" aria-labelledby="${idx}" data-parent="#accordion">
                             <div class="card-body">
                                ${d.coursedata}
                          </div>
                         </div>
                     </div>
    `;
  })
  .join('');
