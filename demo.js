let bcc, i, j, k, l;
bcc = "<table border='1' width='300'>";
l = 1;
k = 2;
i = 0;
while (i < 10) {
    bcc += "<tr>";

    j = 1;

    while (j < 9) {
        bcc += "<td>" + k + "*" + l + "=" + (l * k) + "</td>";
        j++;
        k++;
    }
    bcc += "</tr>";
    k = 2;
    l++;
    i++;
}
bcc = bcc + "</table>";
document.write(bcc);
