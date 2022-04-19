1. `mkdir dir_1`
2. `cd dir_1`
3. `mkdir inner_dir_1`
4. `pwd`
5. `touch tf_1.txt`
6. `cat > tf_2.txt`
    * > the first 1
      >
      >the second 2
      >
      >the third 3
      >
      > press `ctrl + C`

7. `cd inner_dir_1`
8. `cat > tf_3.txt`
    * > any string 1
      >
      >  any string 2

9. `echo "the second 2" >> tf_3.txt`
10. `echo "the sec 2" >> tf_3.txt`
11. `echo "the sec 3" >> ../tf_2.txt`
12. `echo "the SeCoNd 2" >> tf_3.txt`
13. `echo "the seConD 2" >> ../tf_2.txt`
14. `cat > tf_4.txt` + fill it with 15 lines
15. `cat > tf_5.txt` + fill it with 13 lines
16. `ll`
17. `cd ..`
18. `cat inner_dir_1/tf_3.txt`
19. `find * -name tf_4.txt`
20. `: > inner_dir_1/tf_4.txt`
21. `find . -name "tf*" -print`
22. `find . -iname "tf*" -print`
23. `grep "sec" *`
24. `grep -i "sec" *`
25. `grep -w "sec" *`
26. `grep -w -i "sec" *`
27. `grep "second" *`
28. `grep -i "second" *`
29. `grep -r "second" */`
30. `grep -l second`
31. `grep -r -v second`
32. `grep -r -v -L second`
33. `tail -n4 inner_dir_1/tf_3.txt`
34. `head -n4 tf_2.txt`
35. `mkdir inner_dir_2 | echo "some text" > tf_6.txt`
36. `grep -r -l sec | xargs mv -t inner_dir_2`
37. `grep -rl sec | xargs cp -t inner_dir_1`
38. `grep -rh sec >> out.txt`
39. `grep -rl sec | xargs rm -rf`
40. `echo 'Good job!!'`