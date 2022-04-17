import React from 'react'

function Contact() {
  return (
    <div className='project-container'>
    <h1 className='text-primary fw-bold'>Contact me</h1>
    <div className='container project-hero'>
            <div className='row p-lg-5 p-1' id='contact-form'>
              <div className='col-12 col-md-6 col-lg-6 '>
                  <h1 className='text-primary'>Hello</h1>
                  <h3 className='text-secondary'>
                    Feel free to reach me if you wish to discuss something
                  </h3>
              </div>
              <div className='col-12 col-md-6 col-lg-6'>
              <form>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Name</label>
              <input type="text" class="form-control" id="inputEmail4" placeholder="Full Name"/>
            
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
            
            </div>
            
          </div>
          <div class="form-group">
              <label for="inputEmail4">Subject</label>
              <input type="text" class="form-control" id="inputEmail4" placeholder="Subject"/>
            
            </div>
          <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
     
      
      
      <button type="submit" class="btn btn-primary mt-1 col-12">Submit</button>
              </form>
              </div>
            </div>
                </div>
            </div>
  )
}

export default Contact