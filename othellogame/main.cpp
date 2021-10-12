#include<bits/stdc++.h>

using namespace std;

// class Exit
// {
//     public:
//     Exit(){
//         cout<<"hello";
//     }
//     void exitGame(Board obj , Player pl);
// };

// class Board
// {
//     public:
//     map<int , string> blocks;
//     bool isAvail(int choice)
//     {
//         return blocks[choice] == "";
//     }

//     void updateBoard(vector<int> &nums , string color)
//     {
//         for(int i=0;i<nums.size();i++)
//             blocks[nums.at(i)] = color;
//     }

//     bool getAvail(int choice , string color , int *total_checks)
//     {
//         return true;
//     }
// };


// class Player
// {
//     public:
//     string name,color;
//     int total_checks = 0;

//     bool makeMove(Board *obj)
//     {
//         system("clear");
//         string answer;
//         cout<<endl<<name<<" do you want to playe this move ? [Y/N]";
//         cin>>answer;
//         if(answer=="Y"||answer=="y")
//         {
//             while(1)
//             {
//                 int choice;
//                 cout<<"\n"<<name<<" make you choice = ";
//                 cin>>choice;
//                 if(obj->isAvail(choice))
//                 {
//                     if(obj->getAvail(choice , color , &total_checks))
//                         return true;
//                     else
//                         cout<<"\nMove does not convert any blocks, try another...!\n";
//                 }
//                 else
//                 {
//                     cout<<"\nOops ! Already taken, choose another one...!\n";
//                 }
//                 break;
//             }
//         }
//         else
//             return false;

//         return true;
//     }
// };





// void Setup(Player *pl1 , Player *pl2 , Board *obj)
// {
//     pl1->name = "aman";
//     pl1->color = "black";
//     pl1->total_checks = 2;
    
//     pl2->name = "anurag";
//     pl2->color = "white";
//     pl2->total_checks = 2;

//     obj->blocks[18] = obj->blocks[27] = pl2->color;
//     obj->blocks[19] = obj->blocks[26] = pl1->color;
// }

class algo{

    public:
    map<int , string> dict;
    void p()
    {
        dict[18]  = dict[19] = dict[20] = "black";
        dict[27] = "white";
    }
    bool isAvail(int choice)
    {
        return dict[choice] == "";
    }
    bool isSame(int choice , string color)
    {
        return dict[choice] == color;
    }
    void show(int choice)
    {
        if(!isAvail(choice+1))
        {

        }
    }
};

int main()
{

    algo obj;
    obj.p();
    obj.show(10);

    // Exit e;
    
    // system("clear");
    // Player pl1,pl2;
    // Board obj;
    // Setup(&pl1,&pl2,&obj);

    // bool player1 = true;
    // while(1)
    // {
    //     if(player1)
    //     {
    //         if(!pl1.makeMove(&obj))
    //         {
    //             cout<<"\nGame exit !";
    //             break;
    //         }
    //         player1 = false;
    //     }
    //     else
    //     {
    //         if(!pl2.makeMove(&obj))
    //         {
    //             cout<<"\nGame exit !";
    //             break;
    //         }
    //         player1 = true;
    //     }
    // }
}











