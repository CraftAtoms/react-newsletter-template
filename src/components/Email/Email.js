import React from "react";




const Email = () => {
    return (
      <div className='pa4-1 mb4'>
        <form className='bg-black-40 mw7 center pa4 br2-ns ba b--black-10'>
          <fieldset className='cf bn ma0 pa0'>
            <legend className='pa0 f5 f4-ns mb3 white'>Sign up for our newsletter</legend>
            <div className='cf'>
            <label className='clip' for="email-address">Email Address</label>
            <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Your Email Address" type="text" name="email-address" value="" id="email-address"></input>
        <input className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-red hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Subscribe"></input>
            </div>
          </fieldset>
        </form>
      </div>
    );
}

export default Email;