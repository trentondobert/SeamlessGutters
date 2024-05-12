import React from 'react';
import "./css/Services.css"
import logoImage from './Images/seamlessLogo.jpg';
import underImage from './Images/Work/undergutter.jpg';
import dirtyImage from './Images/Work/dirtygutter.jpg';
import windowImage from './Images/Work/window.jpg';


function Services() {
	return (
	  <div class="Services">
		<div class="Service">
			<div class="text">
				<h1>Gutter Installation</h1>
				<p> We specialize in providing top-quality gutter installation solutions tailored to meet your property's unique needs. 
				Our team of experienced professionals ensures precise fitting and installation of gutters, 
				guaranteeing optimal drainage and protection against water damage. With our expertise, 
				you can trust that your property will be equipped with durable, high-performance gutters designed to 
				withstand the elements and safeguard your investment for years to come. Whether you're in need of new gutter installation for a 
				residential or commercial property, we're here to deliver exceptional results that exceed your expectations. 
				Say goodbye to water-related issues and hello to peace of mind with our reliable gutter installation services. 
				Get in touch with us today to schedule your consultation!
				</p>
				<button class="modern-button" type="submit" >Request Service</button>
			</div>
			<div class="image">
				<img src={underImage} alt="Gutter Installation Image"></img>
			</div>		
		</div>
		<div class="Service">
			<div class="text">
				<h1>Gutter Cleaning</h1>
				<p>Our gutter cleaning service ensures that your gutters remain free from debris and blockages, 
					allowing rainwater to flow smoothly and effectively away from your property. 
					With our professional team, we meticulously remove leaves, twigs, and other obstructions from your gutters and downspouts, 
					preventing potential water damage to your roof, walls, and foundation. 
					Regular gutter cleaning not only maintains the integrity of your gutter system 
					but also protects your home from costly repairs due to clogs and overflowing water. 
					Trust us to keep your gutters clean and your property safe from water-related issues. 
					Contact us today to schedule your gutter cleaning appointment!
				</p>
				<button class="modern-button" type="submit" >Request Service</button>
			</div>
			<div class="image">
				<img src={dirtyImage} alt="Gutter Cleaning Image"></img>
			</div>
		</div>

		<div class="Service">
			<div class="text">
				<h1>Roof Repair</h1>
				<p> Our roof repair service is your solution to any roofing issues you may encounter. 
				Whether it's a minor leak, damaged shingles, or more extensive structural damage, 
				our experienced team is here to provide timely and effective repairs to protect your home or business. 
				We conduct thorough inspections to identify the root cause of the problem and offer tailored repair solutions 
				that restore the integrity and functionality of your roof. With our expertise and attention to detail, you 
				can trust us to deliver lasting repairs that withstand the elements and ensure the long-term durability of your roof. 
				Don't let roofing problems escalate into costly damage—contact us today for reliable roof repair services!
				</p>
				<button class="modern-button" type="submit" >Request Service</button>
			</div>
			<div class="image">
				<img src={windowImage} alt="Roof Repair Image"></img>
			</div>
		</div>
	  </div>	  
	);
  
  }

  export default Services;