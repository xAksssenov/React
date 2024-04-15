import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";

interface IDocumentProps {
    name: string
    text: string
    picture: FileList
}

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
})

const PageDocument: React.FC<IDocumentProps> = ({ name, text, picture }) => {
    const pictureData = picture && picture.length > 0 ? URL.createObjectURL(picture[0]) : null

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>{ name }</Text>
                </View>
                <View style={styles.section}>
                    <Text>{ text }</Text>
                </View>
                <View style={styles.section}>
                    { pictureData && <Image src={ pictureData } />}
                </View>
            </Page>
        </Document>
    )
}

export default PageDocument
