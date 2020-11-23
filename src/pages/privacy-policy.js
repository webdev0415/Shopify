import React from 'react'
import { Layout } from '../components/Layout'
import { Link } from 'gatsby'


const privacyPolicy = () => {
    return (
        <Layout>
            <div className="container mx-auto">
            <div class="relative py-16 bg-white overflow-hidden">

            <div class="relative px-4 sm:px-6 lg:px-8">
                <div class="text-lg max-w-prose mx-auto mb-6">
                <h1 class="mt-2 mb-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Privacy Policy</h1>
                </div>
                <div class="prose prose-lg text-gray-500 mx-auto">
                <h1 class="text-lg text-gray-800 mb-3">What information do we collect?</h1>
                <p className="mb-5">
                    We collect information from you when you register on our site or fill out a form. When ordering or registerering on our site, as appropriate, you may be asked to enter your: name or e-mail address. You may, however, visit our site anonymously.
                </p>
                <h1 class="text-lg text-gray-800 mb-3">What do we use your information for?</h1>
                <p className="mb-2">
                    Any of the information we collect from you may be used in one of the following ways:
                </p>
                <ul className="list-disc">
<li className="mb-2">To personalize your experience (your information helps us to better respond to your individual needs)</li>
<li className="mb-2">To improve our website (we continually strive to improve our website offerings based on the information and feedback we receive from you)</li>
<li className="mb-2">To improve customer service (your information helps us to more effectively respond to your customer service requests and support needs)</li>
<li className="mb-2">To process transactions</li>
                </ul>
                <p className="mb-2">
                    Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested by the customer.
                </p>
                <ul className="list-disc">
                    <li className="mb-2">To send periodic emails</li>
                </ul>
                <p className="mb-2">
                    The email address you provide for order processing, may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.
                </p>
                <p className="mb-2">
                    Note: If at anytime you would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email.
                </p>
                <ul className="list-disc">
                    <li className="mb-2">To administer a contest, promotion, survey or other site feature</li>
                </ul>
                <h1 class="text-lg text-gray-800 mb-3">How do we protect your information?</h1>
                <p className="mb-2">
                    We implement a variety of security measures to maintain the safety of your personal information when you access your personal information.
                </p>
                <h1 class="text-lg text-gray-800 mb-3">Do we use cookies?</h1>
                <p className="mb-2">
                    We do not use cookies.
                </p>
                <h1 class="text-lg text-gray-800 mb-3">Do we disclose any information to outside parties?</h1>
                <p className="mb-2">
                    We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safely. However, non­personally identifiable visitor information may be provided lo other parties for marketing, advertising, or other uses.
                </p>
                <h1 class="text-lg text-gray-800 mb-3">Online Privacy Policy Only</h1>
                <p className="mb-2">
                    This online privacy policy applies only to informa1ion collected through our website and not to information collected offline.
                </p>
                <h1 class="text-lg text-gray-800 mb-3">Terms and Conditions</h1>
                <p className="mb-2">
                    Please also visit our <Link className="text-primary-green" to="/terms-conditions">Terms and Conditions</Link> section establishing the use, disclaimers, and limitations of liability governing the use of our website at http://www.freeprivacypolicy.com/terms.html.
                </p>
                <h1 class="text-lg text-gray-800 mb-3">Your consent</h1>
                <p className="mb-2">
                    By using our site, you consent to our privacy policy.
                </p>
                <h1 class="text-lg text-gray-800 mb-3">Changes to our Privacy Policy</h1>
                <p className="mb-2">
                    If we decide to change our privacy policy, we will post those changes on this page.
                </p>
                </div>
            </div>
            </div>
            </div>
        </Layout>
    )
}

export default privacyPolicy