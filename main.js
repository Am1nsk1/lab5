function load () {
        let column_1 = [7,8,8,9,3,8,1,10,10,9,9,5,10,2,6,4,4,6,8,4,7,3,4,6,10,2,7,8,5,3];
        let column_2 = [4,8,6,1,2,8,9,4,5,10,9,5,2,1,1,3,10,3,7,9,10,5,5,4,7,4,10,3,2,6];
        let column_3 = [75, 87, 67, 51, 76, 78, 63, 99, 51, 46, 94, 86, 94, 49, 49, 64, 71, 96, 88, 90, 54, 62, 99, 89, 43, 64, 98, 55, 86, 64];
        let column_4 = [81,	87,	98,	60,	64,	58,	95,	83,	95,	41,	69,	83,	75,	99,	64, 59,	95,	43,	93,	59,	45,	41,	65,	80,	40,	41,	42,	100, 45, 51];
        let sum_1 = 0;
        let sum_2 = 0;
        let sum_3 = 0;
        let sum_4 = 0;
        for(i=0;i<column_1.length;i++){
            sum_1+=column_1[i];
            sum_2+=column_2[i];
            sum_3+=column_3[i];
            sum_4+=column_4[i];
        }
        let sums = [sum_1, sum_2, sum_3, sum_4];
        let total_score = 0;
        for(i=0;i<sums.length;i++){
            total_score+=sums[i];
        }
        const results = {
            col1: column_1,	
            col2: column_2,   	
            col3: column_3,	
            col4: column_4,	
            sums: sums, 	// array of sums of each column
            total_score: total_score,	// computed total score
        }
        console.log(results);


    }