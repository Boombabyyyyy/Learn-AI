let params = new URL(document.location).searchParams;
let q = params.get('q');

console.log(q);

let coursedata = [
  {
    coursename: 'Wordpress Hosting',
    orgprice: '₹150.00',
    price: 'Free',
    rating: '4.5',
    videos: '12 videos',
    hours: '9 hours',
    objectives: `In this 2 hours long project-based course, you will learn to create a Beautiful, Professional Medical Business Website from scratch using WordPress with free Hosting and Sub-domain. Our goal is to get free hosting, subdomain, and make use of WordPress to create an amazing medical background website. You&apos;ll learn to work with themes, plugins, permalinks of WordPress.
    By the end of this project, you will be able to register for a free subdomain and hosting for your website on webhost. You will be able to install WordPress on webhost and you will also be able to create an amazing medical website in WordPress.
    You do not need any programming skills or experience.
    Note: This course works best for learners who are based in the North America region. We&rsquo;re currently working on providing the same experience in other regions.`,
    outline: ` <div id="accordion">
    <div class="card">
        <div class="card-header" id="headingTwo">
            <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <i class="flaticon-question"></i> Is WordPress hosting worth it?
                </button> </h5>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body">
                Our set he for firmament morning sixth subdue darkness creeping gathered divide our
                let god moving. Moving in fourth air night bring upon
</div>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingOne">
            <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    <i class="flaticon-question"></i>Basic Classes
                </span> </button>
        </h5>
    </div>
    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion" style="">
        <div class="card-body">
            Our set he for firmament morning sixth subdue darkness creeping gathered divide our
            let god moving. Moving in fourth air night bring upon
</div>
    </div>
</div>
<div class="card">
    <div class="card-header" id="headingThree">
        <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <i class="flaticon-question"></i> Will you transfer my site?
            </button> </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
        <div class="card-body">
            Our set he for firmament morning sixth subdue darkness creeping gathered divide our
            let god moving. Moving in fourth air night bring upon
</div>
    </div>
</div>
<div class="card">
    <div class="card-header" id="heading_4">
        <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                <i class="flaticon-question"></i> Why should I host with Hostza?
            </button> </h5>
    </div>
    <div id="collapse_4" class="collapse" aria-labelledby="heading_4" data-parent="#accordion">
        <div class="card-body">
            Our set he for firmament morning sixth subdue darkness creeping gathered divide our
            let god moving. Moving in fourth air night bring upon
</div>
    </div>
</div>
<div class="card">
    <div class="card-header" id="heading_5">
        <h5 class="mb-0"> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" aria-controls="collapse_5">
                <i class="flaticon-question"></i> How do I get started 
                <span>with Shared
                            Hosting?</span>
            </button> </h5>
    </div>
    <div id="collapse_5" class="collapse" aria-labelledby="heading_5" data-parent="#accordion">
        <div class="card-body">
            Our set he for firmament morning sixth subdue darkness creeping gathered divide our
            let god moving. Moving in fourth air night bring upon
</div>
    </div>
</div>
</div>`,
    authorname: 'Macau Wilium',
    authorjob: 'UI/UX Designer',
    authordesc: 'what an amazing author!',
  },
];

document.getElementById('single_course_title').innerHTML =
  coursedata[q].coursename;

document.getElementById('orgprice').innerHTML = coursedata[q].orgprice;

document.getElementById('price').innerHTML = coursedata[q].price;
document.getElementById('rating').innerHTML = coursedata[q].rating;
document.getElementById('videos').innerHTML = coursedata[q].videos;
document.getElementById('hours').innerHTML = coursedata[q].hours;
document.getElementById('objectives').innerHTML = coursedata[q].objectives;
document.getElementById('outline').innerHTML = coursedata[q].outline;
document.getElementById('authorname').innerHTML = coursedata[q].authorname;
document.getElementById('authorjob').innerHTML = coursedata[q].authorjob;
document.getElementById('authordesc').innerHTML = coursedata[q].authordesc;
