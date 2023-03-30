# Maher's-Cloud-Resume-GCP 
Taking on the Cloud Resume Challenge

## Building Steps
1. Wrote resume in HTML

2. Styled in CSS

3. Deployed as Static Website on GCP Storage Bucket

4. Used HTTPS security for URL & Cloud CDN to cache site.

5. Pointed a custom DNS domain name to the load balancer endpoint

6. Wrote Javascript code to build a visitor counter that displays how many people have accessed the site.

7. Created a Cloud Firestore Database to retrieve and store the visitor count.

8. Built an API that accepts requests from the web app and communicates with the database through a Cloud Function that has an HTTP trigger.

9. Wrote a Python code in the Cloud Function to communicate with Firestore.

10. Tested the Python code
You should also include some tests for your Python code. Here are some resources on writing good Python tests.

11. Developed Infrastructure as Code through Terraform to make configuration of Firestore, API Gateway, and Cloud Function faster.

12. Implemented Source Control to establish CI/CD by creating a GitHub repository with actions.


13. Set up Cloud Build to push an update to the Terraform config. If it passes the Python tests, the application gets packaged and deployed to Google Cloud.

14. Wrote a blog post to describe the journey of completing this cloud project. 