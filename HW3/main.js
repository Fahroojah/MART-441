function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = "Once upon a time, in a lush bamboo forest, lived a panda named Noodle. Noodle was a curious and playful panda who loved to explore his surroundings and play with his friends.";
        document.getElementById("choice1").innerHTML = "Play with friends";
        document.getElementById("choice2").innerHTML = "Walk alone";
    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "Don't go now! You need to know how Noodle got his name =)";
        document.getElementById("choice1").innerHTML = "Learn about Noodle's name";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Play with friends") {
        document.getElementById("story").innerHTML = "One day, Noodle came across a stream of sparkling water and was eager to take a sip. As he reached for the water, he slipped and fell into the stream, splashing and flailing about. His friends, watching from the bank, couldn't help but laugh at the sight of their friend, who now looked like a limp noodle. ";
        document.getElementById("choice1").innerHTML = "Uh-oh, how did he deal with that?";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Walk alone") {
        document.getElementById("story").innerHTML = "Noodle, whose real name is Jimothy, never gets a cool nickname because he chose to be a loaner.";
        document.getElementById("choice1").innerHTML = "Play with friends";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Learn about Noodle's name") {
        document.getElementById("story").innerHTML = "One day, Noodle came across a stream of sparkling water and was eager to take a sip. As he reached for the water, he slipped and fell into the stream, splashing and flailing about. His friends, watching from the bank, couldn't help but laugh at the sight of their friend, who now looked like a limp noodle. ";
        document.getElementById("choice1").innerHTML = "Uh-oh, how did he deal with that?";
        document.getElementById("choice2").innerHTML = "No quit";
   /* } else if (choice == 2 && answer2 == "Scan the situation") {
       document.getElementById("story").innerHTML = "Pugster decides to just look around for the moment. What should Pugster do now?";
        document.getElementById("choice1").innerHTML = "Watch from afar";
        document.getElementById("choice2").innerHTML = "Get in closer";
        */
    }

    else if (choice == 1 && answer1 == "Uh-oh, how did he deal with that?") {
        document.getElementById("story").innerHTML = "From that day on, Noodle's friends affectionately referred to him as <i>'Noodle</i> and the name stuck. Noodle took it in stride, even adopting it as his own. He was proud of his unique name and the silly story behind it. ";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Stay clear") {
        document.getElementById("story").innerHTML = "Pugster decides staying away is the best option" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Go for a swim") {
        document.getElementById("story").innerHTML = "Pugster decides that swimming sounds most fun" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Get a drink") {
        document.getElementById("story").innerHTML = "Pugster decides it's time to drink" + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes it will work") {
        document.getElementById("story").innerHTML = "Pugster thinks, yeah this will work out." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "No it will not work") {
        document.getElementById("story").innerHTML = "Pugster thinks, I don't think this will work out." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Watch from afar") {
        document.getElementById("story").innerHTML = "Pugster decides it's time to just watch from a distance for safety." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 2 && answer2 == "Get in closer") {
        document.getElementById("story").innerHTML = "Pugster decides to get just a little closer, but not engage." + "<br>Restart?";
        document.getElementById("choice1").innerHTML = "Yes restart";
        document.getElementById("choice2").innerHTML = "No quit";
    } else if (choice == 1 && answer1 == "Yes restart") {
        document.getElementById("story").innerHTML = "Our fearless leader, 'Pugster' has entered the dog park for the first time. Scared? Yes, but willing to give it a try. Are you ready to start on adventure with Pugster?";
        document.getElementById("choice1").innerHTML = "Yes";
        document.getElementById("choice2").innerHTML = "No";
    } else if (choice == 2 && answer2 == "No quit") {
        document.getElementById("story").innerHTML = "Bye bye!";

    }


}