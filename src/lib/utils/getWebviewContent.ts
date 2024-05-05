const getWebviewContent = (URL: string) => {
  return `<!DOCTYPE html>
<html lang="en" style="height: 100%; margin: 0; padding: 0;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Revit API Docs</title>
    <style>
        body {
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
        }
        iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
    </style>
</head>
<body>
    <iframe src="${URL}"></iframe>
</body>
</html>`;
};

export default getWebviewContent;
