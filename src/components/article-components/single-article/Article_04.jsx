// This Component is being used for displaying demo article
// This Component is being used for displaying demo article
// import axios from "axios";
import ArticleBackButton from "./ArticleBackBtn";
import Heading from "./Heading";
import Contents from "./Contents";
import banner from "../../../assets/Article_04_banner.jpg";
import ARTICLES from "../../../contents/articles-info";
import ExtLink from "./ExtLink";
import Image from "./Image";
import CodeEditor from "./CodeEditor"
export default function Article_04() {
  return (
    <div className="single-article-container px-2 mx-auto mt-15 md:mt-20 flex flex-col md:flex-row">
      <div className="back-aero-container md:basis-1/6 flex-col md:flex-row items-center">
        <div className="flex">
          <ArticleBackButton />
        </div>
      </div>
      <div className="article-contents-container max-w-2xl basis-10/12">
        <p className="article-date text-stone-300 dark:text-stone-600 font-semibold text-[100%] mb-10">
          <span className="mr-3 font-bold h-3">|</span>
          {ARTICLES[3].date}
        </p>
        <Heading extraClasses="mb-15">{ARTICLES[3].articleHeading}</Heading>
        <Contents>{ARTICLES[3].article}</Contents>
        <Image src={banner} className="rounded-xl my-10" />
        <Heading>Prerequisites</Heading>
        <hr className="border-slate-200 dark:border-[#35353b]" />
        <Contents>
          <Heading>Before starting, ensure you have the following: </Heading>
          <ul>
            <b>
              <li>AWS Account:</li>
            </b>
            You need an active AWS account. Sign up at aws.amazon.com if you
            don’t already have one.
            <b>
              <li>IAM Role or User Permissions:</li>
            </b>
            Ensure your user account has permissions to create and manage EC2
            instances.
            <b>
              <li>Basic Understanding of AWS:</li>
            </b>
            Familiarity with the AWS Management Console is helpful.
          </ul>
        </Contents>
        <Contents>
          <Heading>Step 1:</Heading>
          <ol>
            <li>
              1. Log In to AWS Management Console Go to the AWS Management
              Console.
            </li>
            <li>2. Sign in with your credentials.</li>
            <li>
              3. Navigate to the EC2 Dashboard by typing "EC2" in the search bar
              and selecting it from the results.
            </li>
          </ol>
        </Contents>
        <Contents>
          <Heading>Step 2:</Heading>
          <ol>
            <li>
              1. Launch an EC2 Instance On the EC2 Dashboard, click the "Launch
              Instance" button.
            </li>
            <li>
              2. Provide a name for your instance in the "Name and tags" section
              to identify it easily.
            </li>
          </ol>
        </Contents>
        <Contents>
          <Heading>Step 3:</Heading>
          <ol>
            <li>
              1. Choose an Amazon Machine Image (AMI) Select an AMI that suits
              your needs. Options include:
              <ul className="pl-4">
                <li>
                  <b>Amazon Linux:</b> Lightweight and optimized for AWS.
                </li>
                <li>
                  <b>Ubuntu:</b> Popular for developers and versatile
                  applications.
                </li>
                <li>
                  <b>Windows Server:</b> Ideal for Windows-based applications.
                </li>
              </ul>
            </li>
            <li>2. Click "Select" next to your chosen AMI.</li>
          </ol>
        </Contents>
        <Contents>
          <Heading>Step 4:</Heading>
          <ol>
            <li>
              Choose an Instance Type Choose an instance type based on your
              application’s resource needs. For example:
              <ul className="pl-4">
                <li>
                  <b>At2.micro:</b> Free tier eligible, suitable for light
                  workloads.
                </li>
                <li>
                  <b>m5.large:</b> More powerful, suitable for medium workloads.
                </li>
              </ul>
            </li>
            <li>
              Click "Next: Configure Instance Details" after selecting the type.
            </li>
          </ol>
        </Contents>
        <Contents>
          <Heading>Step 5:</Heading>
          <ol>
            <li>
              Configure Instance Details Number of Instances: Specify the number
              of instances to launch.
              <ul className="pl-4">
                <li>
                  <b>Network Settings:</b> Choose a VPC and subnet (default
                  options are typically fine).
                </li>
                <li>
                  <b>IAM Role:</b> Attach an IAM role if your instance requires
                  access to other AWS services.
                </li>
              </ul>
            </li>
            <li>Click "Next: Add Storage" to proceed.</li>
          </ol>
        </Contents>
        <Contents>
          <Heading>Step 6:</Heading>
          <ol>
            <li>
              Add Tags (Optional) Tags help organize resources. Add key-value
              pairs such as: Key: Environment Value: Development
            </li>
            <li>Click "Next: Configure Security Group" to continue.</li>
          </ol>
        </Contents>
        <Contents>
          <Heading>Step 7:</Heading>
          <ol>
            <li>
              Configure Security Group Create a new security group or select an
              existing one.
            </li>
            <li>
              Define inbound rules to allow traffic: SSH (Port 22): For remote
              login (limit access to your IP for security). HTTP/HTTPS (Port
              80/443): If hosting a web application.
            </li>
          </ol>
        </Contents>
        <Contents>
          <Heading>Step 8:</Heading>
          <ol>
            <li>Click "Review and Launch".</li>
            <li>
              Review and Launch Review all the configurations to ensure
              correctness.
            </li>
            <li> Click "Launch" to initiate the instance creation. </li>
          </ol>
        </Contents>
        <Contents>
          <Heading>Step 9:</Heading>
          <ol>
            <li>
              Select or Create a Key Pair Choose an existing key pair or create
              a new one for SSH access.
            </li>
            <li>
              Download the key pair (if creating a new one) and store it
              securely.
            </li>
            <li> Confirm by clicking "Launch Instances". </li>
          </ol>
        </Contents>
        <Contents>
          <Heading>Step 10:</Heading>
          <ol>
            <li>
              Access Your Instance Navigate to the EC2 Dashboard and locate your
              instance under "Instances".
            </li>
            <li>
              Copy the public IP or DNS. Connect using SSH:
            </li>
          </ol>
        </Contents>
              <CodeEditor>
                {`ssh -i /path/to/your-key.pem ec2-user@your-instance-public-ip`}
              </CodeEditor>
        <Contents>
          <Heading>Conclusion:</Heading>
          <p>
            Congratulations! You’ve successfully created and launched an AWS EC2
            instance. With this foundation, you can explore further
            configurations such as setting up a web server, deploying
            applications, or creating backups. AWS EC2’s flexibility makes it a
            go-to choice for a wide range of cloud computing needs.
          </p>
        </Contents>
      </div>
    </div>
  );
}
