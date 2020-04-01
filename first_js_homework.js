// katies-air:first_homework katie$ cd~
// -bash: cd~: command not found
// katies-air:first_homework katie$ cd ~
// katies-air:~ katie$ cd Desktop
// katies-air:Desktop katie$ mkdir galaxy_far_far_away
// katies-air:Desktop katie$ mkdir death_star
// katies-air:Desktop katie$ cd death_star
// katies-air:death_star katie$ touch darth_vader.txt
// katies-air:death_star katie$ touch princess_leia.txt
// katies-air:death_star katie$ touch storm_trooper.txt
// katies-air:death_star katie$ cd ../galaxy_far_far_away/
// katies-air:galaxy_far_far_away katie$ touch luke.txt
// katies-air:galaxy_far_far_away katie$ ben_kenobi.txt
// -bash: ben_kenobi.txt: command not found
// katies-air:galaxy_far_far_away katie$ mkdir tatooine
// katies-air:galaxy_far_far_away katie$ mv luke.txt/tatooine
// katies-air:galaxy_far_far_away katie$ cd tatooine
// katies-air:tatooine katie$ mkdir millenium_falcon
// katies-air:tatooine katie$ cd millenium_falcon/
// katies-air:millenium_falcon katie$ touch han_solo.txt
// katies-air:millenium_falcon katie$ touch chewbaca.txt
// katies-air:millenium_falcon katie$ cd ..
// katies-air:tatooine katie$ cd ..
// katies-air:galaxy_far_far_away katie$ cd tatooine 
// katies-air:tatooine katie$ touch ben_kenobi.txt
// katies-air:tatooine katie$ mv ben_kenobi.txt obi_wan.txt
// katies-air:tatooine katie$ ls
// luke.txt		millenium_falcon	obi_wan.txt
// katies-air:tatooine katie$ cd ../..
// katies-air:Desktop katie$ cd galaxy_far_far_away/
// katies-air:galaxy_far_far_away katie$ cd death_star/
// katies-air:death_star katie$ ls
// darth_vader.txt		princess_leia.txt	storm_trooper.txt
// katies-air:death_star katie$ cp storm_trooper.txt ../tatooine
// katies-air:death_star katie$ pwd
// /Users/katie/Desktop/galaxy_far_far_away/death_star
// katies-air:death_star katie$ cd ../tatooine
// katies-air:tatooine katie$ ls
// luke.txt		obi_wan.txt
// millenium_falcon	storm_trooper.txt
// katies-air:tatooine katie$ mv luke.txt/millenium_falcon
// usage: mv [-f | -i | -n] [-v] source target
//        mv [-f | -i | -n] [-v] source ... directory
// katies-air:~ katie$ cd Desktop/galaxy_far_far_away/tatooine/
// katies-air:tatooine katie$ ls
// luke.txt		obi_wan.txt
// millenium_falcon	storm_trooper.txt
// katies-air:tatooine katie$ mv luke.txt millenium_falcon/
// katies-air:tatooine katie$ ls
// millenium_falcon	obi_wan.txt		storm_trooper.txt
// katies-air:tatooine katie$ mv obi_wan.txt millenium_falcon/
// katies-air:tatooine katie$ ls
// millenium_falcon	storm_trooper.txt
// katies-air:tatooine katie$ mv millenium_falcon/ ..
// katies-air:tatooine katie$ ls
// storm_trooper.txt
// katies-air:tatooine katie$ cd ..
// katies-air:galaxy_far_far_away katie$ ls
// death_star		millenium_falcon	tatooine
// katies-air:galaxy_far_far_away katie$ mv millenium_falcon/ death_star/
// katies-air:galaxy_far_far_away katie$ ls
// death_star	tatooine
// katies-air:galaxy_far_far_away katie$ cd death_star/
// katies-air:death_star katie$ mv princess_leia.txt millenium_falcon/
// katies-air:death_star katie$ ls
// darth_vader.txt		millenium_falcon	storm_trooper.txt
// katies-air:death_star katie$ cd millenium_falcon/
// katies-air:millenium_falcon katie$ ls
// chewbaca.txt		luke.txt		princess_leia.txt
// han_solo.txt		obi_wan.txt
// katies-air:millenium_falcon katie$ rm obi_wan.txt 
// katies-air:millenium_falcon katie$ ls
// chewbaca.txt		luke.txt
// han_solo.txt		princess_leia.txt
// katies-air:millenium_falcon katie$ cd ../..
// katies-air:galaxy_far_far_away katie$ mkdir yavin_4
// katies-air:galaxy_far_far_away katie$ cd yavin_4/
// katies-air:yavin_4 katie$ mkdir x_wing
// katies-air:yavin_4 katie$ cd ../death_star/millenium_falcon/
// katies-air:millenium_falcon katie$ mv princess_leia.txt yavin_4
// katies-air:millenium_falcon katie$ mv yavin_4 princess_leia.txt
// katies-air:millenium_falcon katie$ mv princess_leia.txt ../../yavin_4
// katies-air:millenium_falcon katie$ luke.txt ../../yavin_4/x_wing
// -bash: luke.txt: command not found
// katies-air:millenium_falcon katie$ luke.txt ../../yavin_4/
// -bash: luke.txt: command not found
// katies-air:millenium_falcon katie$ 
// katies-air:millenium_falcon katie$ mv luke.txt ../../yavin_4/
// katies-air:millenium_falcon katie$ mv luke.txt x_wing
// mv: rename luke.txt to x_wing: No such file or directory
// katies-air:millenium_falcon katie$ mv luke.txt ../../yavin_4/x_wing
// mv: rename luke.txt to ../../yavin_4/x_wing/luke.txt: No such file or directory
// katies-air:millenium_falcon katie$ ls
// chewbaca.txt	han_solo.txt
// katies-air:millenium_falcon katie$ cd ../../yavin_4/
// katies-air:yavin_4 katie$ mv luke.txt x_wing
// katies-air:yavin_4 katie$ cd ..
// katies-air:galaxy_far_far_away katie$ ls
// death_star	tatooine	yavin_4
// katies-air:galaxy_far_far_away katie$ mv death_star/millenium_falcon/ ../..
// katies-air:galaxy_far_far_away katie$ cd yavin_4
// katies-air:yavin_4 katie$ mv x_wing ..
// katies-air:yavin_4 katie$ pwd
// /Users/katie/Desktop/galaxy_far_far_away/yavin_4
// katies-air:yavin_4 katie$ cd ..
// katies-air:galaxy_far_far_away katie$ cd death_star
// katies-air:death_star katie$ mkdir tie_fighter_1
// katies-air:death_star katie$ mkdir tie_fighter_2
// katies-air:death_star katie$ mkdir tie_fighter_3
// katies-air:death_star katie$ ls
// darth_vader.txt		tie_fighter_1		tie_fighter_3
// storm_trooper.txt	tie_fighter_2
// katies-air:death_star katie$ mv darth_vater.txt tie_fighter_1
// mv: rename darth_vater.txt to tie_fighter_1/darth_vater.txt: No such file or directory
// katies-air:death_star katie$ mv darth_vader.txt tie_fighter_1
// katies-air:death_star katie$ ls
// storm_trooper.txt	tie_fighter_2
// tie_fighter_1		tie_fighter_3
// katies-air:death_star katie$ cp storm_trooper.txt tie_fighter_2
// katies-air:death_star katie$ cp storm_trooper.txt tie_fighter_3
// katies-air:death_star katie$ 
// katies-air:death_star katie$ mv tie_fighter_1 ..
// katies-air:death_star katie$ mv tie_fighter_2 ..
// katies-air:death_star katie$ mv tie_fighter_3 ..
// katies-air:death_star katie$ cd ..
// katies-air:galaxy_far_far_away katie$ rm tie_fighter_2
// rm: tie_fighter_2: is a directory
// katies-air:galaxy_far_far_away katie$ rm tie_fighter_2
// rm: tie_fighter_2: is a directory
// katies-air:galaxy_far_far_away katie$ rm tie_fighter_3
// rm: tie_fighter_3: is a directory
// katies-air:galaxy_far_far_away katie$ rmdir tie_fighter_2
// rmdir: tie_fighter_2: Directory not empty
// katies-air:galaxy_far_far_away katie$ cd tie_fighter_2
// katies-air:tie_fighter_2 katie$ rm storm_trooper.txt
// katies-air:tie_fighter_2 katie$ cd..
// -bash: cd..: command not found
// katies-air:tie_fighter_2 katie$ cd ..
// katies-air:galaxy_far_far_away katie$ rmdir tie_fighter_2
// katies-air:galaxy_far_far_away katie$ cd tie_fighter_3
// katies-air:tie_fighter_3 katie$ rm storm_trooper.txt 
// katies-air:tie_fighter_3 katie$ cd..
// -bash: cd..: command not found
// katies-air:tie_fighter_3 katie$ cd ..
// katies-air:galaxy_far_far_away katie$ rmdir tie_fighter_3
// katies-air:galaxy_far_far_away katie$ cd x_wing
// katies-air:x_wing katie$ touch the_force.txt
// katies-air:x_wing katie$ cd ..
// katies-air:galaxy_far_far_away katie$ cd death_star/
// katies-air:death_star katie$ rm storm_trooper.txt 
// katies-air:death_star katie$ cd ..
// katies-air:galaxy_far_far_away katie$ rmdir death_star/
// rmdir: death_star/: Directory not empty
// katies-air:galaxy_far_far_away katie$ mv x_wing yavin_4
// katies-air:galaxy_far_far_away katie$ mv millenium_falcon/ yavin_4/
// katies-air:galaxy_far_far_away katie$ 


// Section 1
// 1) DRY - Don't Repeat Yourself
// 2) const will never change. var is the old way of saying variable. let is the new way of defining a variable.


// Section 2
// 1) a !== b
// 2) c > d
// 3) 'name' == 'name'
// 4) a < b < c 
// 5) a * a = d 
// 6) e === kelvin
// 7) 48 !== '48'
// 8) var i{ if (f = false) + (e = 'Kelvin') {
//     console.log(i) }
// }
// 9) var g = 0
// 10) console.log(g)
// 11) g = (b + c)
// 12) console.log(g)

// I used var for g because it needed to be able to be changed.
// False

// Section 3
// Yes that is an infinite loop. There is nothing to argue for false, 
// so there will be nothing stopping the loop from being true forever.

// No, this is not an infinite loop. The loop should only run once before becoming false.

// let letters = "A";
// let i = 0;
// // start a while loop that will run as long as i < 20 
// while (i < 20) {
// 	letters += "A";
// 	i++;
// }
// // increase value of i by 1 each loop
// console.log(letters);
// // This loop will print 'A' 20 times before becoming false.

// The loop ran as predicted

// The first part of the control panel is: i = 0
// The second part of the control panel is: i < 100
// The third part of the control panel is: i++

// let num = 0;
// while (num <= 999) {
//     console.log('The number is ' + num);
//     num++
// }
// BONUS - \ is removing the meaning of the ' symbol keeping it just text

// let num = 999;
// while (num >= 0) {
//     console.log('The number is ' + num);
//     num--
// }

// var i;
// for (i = 0; i <= 10; i++) {
//     console.log('The value of i is ' + i + ' of 10.')
// }