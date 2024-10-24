<!-- @format -->

# Projects-Git

C++ Programming Interview Questions

Section 1: Fundamentals (40 points)

1. Define token in C++. (5 points)
   Ans: Tokens are small units of any program of code. These are basic building blocks of code
   ex: int num = 5;
   int, num, =, 5, ; => there are tokens 5 are avilable in this example.

2. Differentiate between struct and class in C++. (10 points)
   Ans:

- These are used in classes
- Both are keyword which are pre-defined
- struct is by default is public
- syntax:
  struct className{
  public:
  // code
  }

class is private by default
syntax:
class className{
private:
//code
}

inheritance: struct is default public & class is private
constructor: struct is public and class is private in function

3. Explain call by value vs. call by reference in C++. Provide an example. (15 points)
   Ans: In call by value varibale will won't effect with it's original value mean there no changes will occur in varible

   void swap(int a , int b){ //call by vakue
   int temp = a;
   a=b;
   b=temp;
   }

   int main(){
   int x =5, y=10;
   swap(x,y);
   std::cout<<"a="<<x<<"\n"; //output: x = 5
   std::cout<<"b="<<y; //output: y=10
   return 0;
   }

   in call by reference, original varibale will effect, were insimple it changes in variblwe will occur, "&" acts reference it stores the memory information of updated values
   So, due it changes in varibales value will occur
   void swap(int &a, int &b){ // call by reference
   int temp = a;
   a=b;
   b=temp;
   }

   int main(){
   int a = 10 ; b=5;
   swap(a,b);
   cout<<"a="<<a<<"\n"; //output: a = 5
   cout<<"b="<<b; //output: b = 10
   }

4. Describe virtual and pure virtual functions in C++. (10 points)
   Ans: These are used for overriding purpose in a functions

let's see with an example

#include <iostream>
class Animal{
public:
virtual void virtualFun(){
std::cout<<"Animals can make sounds";
}

    virtual void pureVirtualFun()=0;

};

class Dog: public Animal{
public:
void virtualFun() override{
std::cout<<"by Virtual function overrided to: "<<"\n";
std::cout<<"let's dog say bow bow "<<"\n\n";
}
void pureVirtualFun() override{ // pure virtual function
std::cout<<"by Pure Virtual function "<<"\n";
std::cout<<"Dog is Animal, can make sounds ";
}
};

int main(){
Dog myDog;
myDog.virtualFun();
myDog.pureVirtualFun();
return 0;
}

here, virtaul function is implementation is done in while decaring a class
while decalring the vitual function we given a statement to print
in derived class, we given another funtion to overriden, So, here, statement is overriden inderived class

but when comes to only once pure virtual function implementation is derived class & while declaring the pure virtual function it has to assigned to 0 "=0".
So, then we can override the function
Section 2: Data Structures and Algorithms (30 points)

1. Implement a binary search algorithm to find a peak element in an array. (20 points)
   Ans:

   1. Elements of array has to search from both sides, right and left. So, binary serach to best approach
   2. intilise left = 0, right = n-1; n is length of array
   3. find mid, mid = right+left/2;
   4. if arr[mid] is greater than both neighbours then, mid is peak element
   5. if arr[mid] is smaller than right neighbours then, update left = mid+1;
   6. if arr[mid] is smaller than left neighbours then, update right = mid-1;
   7. untill finding the mid elemnt repat from 3-6 steps
   8. return left or right as peak element index or index element

      public class Main
      {
      public static int findPeakElement(int[] nums)
      {
      int left = 0;
      int right = nums.length - 1;
      while (left < right) {
      int mid = left + (right - left) / 2;
      if (nums[mid] > nums[mid + 1])
      {
      right = mid;
      } else
      {
      left = mid + 1;
      }
      }
      return left;
      }

      public static void main(String[] args)
      {
      int[] nums = {1, 3, 5, 3, 1};
      int peakIndex = findPeakElement(nums);
      System.out.println("Peak Element: " + nums[peakIndex] + ", Index: " + peakIndex);
      }
      }

2. Write a C++ program to check if an array is a subset of another array. (10 points)

Section 3: Object-Oriented Programming (30 points)

1. Define encapsulation, inheritance, and polymorphism in C++. (15 points)
2. Explain the concept of abstract classes and interfaces in C++. (15 points)

Java Programming Interview Questions

Section 1: Fundamentals (40 points)

1. Describe Just-In-Time (JIT) compilation in Java. (10 points)
2. Explain memory storage areas available with JVM (Method Area, Heap, Stack, Native Method Stack, PC Register). (15 points)
3. Define Java String Pool and its purpose. (10 points)
4. Differentiate between built-in and user-defined packages in Java. (5 points)

Section 2: Data Structures and Algorithms (30 points)

1. Implement a Java program to find a peak element in an array. (20 points)
2. Write a Java program to check if an array is a subset of another array using HashSet. (10 points)

Section 3: Object-Oriented Programming (30 points)

1. Define encapsulation, inheritance, and polymorphism in Java. (15 points)
2. Explain the concept of abstract classes and interfaces in Java. (15 points)
