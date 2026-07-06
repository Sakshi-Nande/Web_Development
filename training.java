import java.util.ArrayList;
class node {
    int data;
    node next;
    node (int d){ data=d; next=null;}
}

public class training{
    public static void main(String args[]){
       /* int [] arr= {1,2,3,4,5,6};

        for(int i=0;i<=5;i++){
            System.out.println(arr[i]);
        }*/
/* 
        int [][] arr= {
            {1,2,3},
            {1,2,3},
            {1,2,3}
        };

        for(int i=0;i<=2;i++){
            for(int j=0;j<=2;j++){
                System.out.print("  " + arr[i][j]);
            }
            System.out.println();
        }

        int arr[]= new int[3];
        arr[0]=99;
        arr[1]=89;
        arr[2]=77;
        for(int i=0;i<=2;i++){
                    System.out.println(arr[i]);
                }

    ArrayList<Integer> num  = new ArrayList<>();
    num.add(11);
    num.add(34);

    System.out.println(num.get(1));


        int nums[]= {2,3,4,5,7,7};
        int prefix []= new int [nums.length];
        prefix[0]=nums[0];
        for(int i=1;i<5;i++){
            prefix[i]=prefix[i-1]+nums[i];
        }

        int sum = prefix[4]  - prefix[0];
        System.out.println("sum of range [1,4] = " + sum);
           
*/
        node head = new node(3);
        node n2= new node (5);
         node n3= new node (7);

         head.next=n2;
         n2.next=n3;

         node current = head;

         while (current != null){
            System.out.println(current.data);
            current=current.next;
         }
                    }
        }