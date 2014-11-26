# HFF ltd. #

HFF ltd. Site v2.0

Designed to run in Nitrous.IO node.js box

## Setup a new VM ##

Setup (or use an existing) Virtual Machine running Node.js.

Add the ssh key to your GitHub account using the machine settings page in Nitrous.

Start the VM & go to the IDE.

Setup yor GitHub account on the VM using the steps described <a href="http://help.nitrous.io/">here</a>

Clone the git repo by doing the following in the VM Console.

<code>cd workspace</code>
<code>git clone git@github.com:CommanderRhode/hffltd.git</code>

There should now be a folder "hffltd".

## Starting up the server ##

In the console of the VM, navigate to the server folder and start the server by doing the following:

<code>cd workspace/hffltd</code>
<code>node hffltf.js</code>

You should now be able to hit the server at:
<a href="http://purple-lannisport-42-167762.euw1.nitrousbox.com/index" />

## Saving changes back to github

Once you've made changes to your code or added pages or folders, you'll want to save your work back to github.

In the VM Console:

<code>cd workspace/hffltd</code>
<code>git add .</code>
<code>git ci -am "{add message about what's changed here}"</code>
<code>git push</code>

This will add any files to your local repo, check in your changes with the message you give it then push all the changes up to the github servers.

## Testing ##

Unit testing of the node server is done with Jasmine.

To execute the tests:

<code>cd workspace/hffltd</code>
<code>jasmine</code>

You should see a response with the number of specs run, number of failures & time taken.